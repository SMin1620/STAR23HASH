package com.letter.authservice.member.service;

import com.letter.authservice.exception.BusinessLogicException;
import com.letter.authservice.exception.ExceptionCode;
import com.letter.authservice.jwt.JwtTokenProvider;
import com.letter.authservice.member.dto.Contact;
import com.letter.authservice.member.dto.ContactRequestDto;
import com.letter.authservice.member.dto.MemberDto;
import com.letter.authservice.member.dto.TokenDto;
import com.letter.authservice.member.entity.Member;
import com.letter.authservice.member.entity.Roll;
import com.letter.authservice.member.feign.LetterFeign;
import com.letter.authservice.member.feign.NoteFeign;
import com.letter.authservice.member.repository.MemberRepository;
import com.letter.authservice.member.repository.RollRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.env.Environment;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final RedisTemplate<String, String> redisTemplate;
    private final RedisTemplate<String, Contact> redisTemplateObject;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;
    private final Environment env;
    private final NoteFeign noteFeign;
    private final LetterFeign letterFeign;
    private final RollRepository rollRepository;


    public TokenDto memberLogin(HttpServletResponse response, MemberDto.MemberLoginRequestDto requestBody) {
        Member member = memberRepository.findByPhone(requestBody.getPhone()).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        System.out.println("로그인 시작 ");
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        requestBody.getPhone(),
                        requestBody.getPassword()
                )
        );

        String accessToken = jwtTokenProvider.createAccessToken(authentication);
        String refreshToken = jwtTokenProvider.createRefreshToken(authentication);

        TokenDto tokenDto =TokenDto.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .memberId(member.getId())
                .build();
        // 헤더에 토큰 담기
        jwtTokenProvider.setHeaderAccessToken(response, accessToken);
        jwtTokenProvider.setHeaderRefreshToken(response, refreshToken);

        return tokenDto;
    }

    public Member memberRegister(MemberDto.MemberRegisterRequestDto requestBody) {

        memberRepository.findByPhone(requestBody.getPhone())
                .ifPresent(member -> {
                    throw new BusinessLogicException(ExceptionCode.PHONE_ALREADY_EXISTS);
                });


        Member member = Member.builder()
                .phone(requestBody.getPhone())
                .password(passwordEncoder.encode(requestBody.getPassword()))
                .createAt(LocalDateTime.now())
                .isWrite(false)
                .build();

        memberRepository.save(member);

        Roll roll = Roll.builder()
                .member(member)
                .build();

        rollRepository.save(roll);
        return member;

    }

    public boolean emailDoubleCheck(String phone) {
        Optional<Member> member = memberRepository.findByPhone(phone);
        return member.isPresent();
    }

    public Member memberInfo(String phone) {
        Member member = memberRepository.findByPhone(phone).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return member;
    }


    /**
     * 리프레시 토큰으로 엑세스 토큰 재발급
     */
    /**
     * 리프레시 토큰 발급
     */
    public TokenDto refresh(
            HttpServletRequest request,
            HttpServletResponse response
    ){
        // 1. Request Header 에서 JWT Token 추출
//        String token = jwtTokenProvider.resolveToken(request);
        String token = jwtTokenProvider.resolveRefreshToken(request);

        // 2.엑세스 토큰 유효성 검사
//        if(token == null || !jwtTokenProvider.validateToken(token)){
//            throw new IllegalArgumentException("엑세스 토큰이 잘못 됨");
//        }

        // 3. 엑세스 토큰에서 Phone 가져옴
        String phone = jwtTokenProvider.getUserPhone(token);

        // 4. 레디스의 refresh token 을 가져온다.
        String refresh = redisTemplate.opsForValue().get(phone);

        System.out.println("refresh token >>> "+ refresh);

        // 5. 레디스의 리프레시 토큰과 요청 리프레시 토큰을 비교
        String headerRefreshToken = jwtTokenProvider.resolveRefreshToken(request);
        System.out.println("header refresh >>> " + headerRefreshToken);
        if(headerRefreshToken == null || !jwtTokenProvider.validateToken(headerRefreshToken)){
            throw new IllegalArgumentException("리프레시 토큰이 잘못 됨");
        }

        // 6. 엑세스 토큰 재발급 :: 리프레시 토큰은 재발급 하지 않을 것임.
        Optional<Member> member = memberRepository.findByPhone(phone);
        Authentication authentication = jwtTokenProvider.getAuthenticationByUsername(member.get().getPhone());

        String newAccessToken = jwtTokenProvider.createAccessToken(authentication);

        // 7. 토큰 헤더에 담기
        jwtTokenProvider.setHeaderAccessToken(response, newAccessToken);
//        jwtTokenProvider.setHeaderRefreshToken(response, headerRefreshToken);

        // 8. 토큰 생성
        TokenDto tokenDto = TokenDto.builder()
                .accessToken(newAccessToken)
                .refreshToken(headerRefreshToken)
                .memberId(member.get().getId())
                .build();
        return tokenDto;
    }

    public Long getId(HttpServletRequest request){
        Member member = memberRepository.findByPhone(
                jwtTokenProvider.getUserPhone(
                        jwtTokenProvider.resolveToken(request))).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return member.getId();
    }

    public Long getAnotherId(String phone){
        Member member = memberRepository.findByPhone(phone).orElseThrow(()->new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return member.getId();
    }

    public Boolean checkPhone(String phone){
        Optional<Member> member = memberRepository.findByPhone(phone);

        if (member.isPresent()) return true;
        return false;
    }

    public Boolean createContact(HttpServletRequest request, ContactRequestDto contactRequestDto){

        Member member = memberRepository.findByPhone(
                jwtTokenProvider.getUserPhone(
                jwtTokenProvider.resolveToken(request))).orElseThrow(()->new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        ListOperations<String, Contact> list = redisTemplateObject.opsForList();
        for(Contact c:contactRequestDto.getContacts()){
            Optional<Member> m = memberRepository.findByPhone(c.getPhone());
            if(!m.isEmpty()){
                Contact newContact = new Contact(c.getName(),c.getPhone());
                list.rightPush(member.getId().toString(), newContact);
                System.out.println(member.getId().toString());
            }
        }
        return true;
    }

    public List<Contact> checkContact(HttpServletRequest request){
        Member member = memberRepository.findByPhone(jwtTokenProvider.getUserPhone(
                        jwtTokenProvider.resolveToken(request)))
                .orElseThrow(()->new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        List<Contact> contactList= redisTemplateObject.opsForList().range(member.getId().toString(),0,-1);

       return contactList;
    }


    /**
     * 테스츠 : 초기화
     */
    @Transactional
    public Boolean reset() {
        List<Member> memberList = memberRepository.findAll();
        for (Member member : memberList) member.setIsWrite(false);
        return true;
    }

    /**
     * 작성 여부 체크
     */
    public Boolean writeCheck(HttpServletRequest request) {
        Member member = memberRepository.findByPhone(
                jwtTokenProvider.getUserPhone(
                        jwtTokenProvider.resolveToken(request))).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        System.out.println("member >>> " + member.getIsWrite() );
        return member.getIsWrite();
    }


    /**
     * 알람 체크
     */
    public Boolean alarmCheck(Long memberId) {

        // 날짜 계산
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime start = now.minusDays(1).withHour(18).withMinute(0).withSecond(0).withNano(0);
        LocalDateTime end = now.withHour(17).withMinute(59).withSecond(59).withNano(0);

        // 롤링페이퍼가 왔는지
        System.out.println("롤링페이퍼 까지 왔다.");
        Optional<Member> member = memberRepository.findByIdAndCreateAtBetween(memberId, start, end);
        if (member.isPresent()) return true;
        
        // 쪽지가 있는지
        System.out.println("롤링페이퍼, 쪽지 까지 왔다.");
        if (noteFeign.findNote(memberId)) return true;
        
        // 편지가 있는지
        System.out.println("롤링페이퍼, 쪽지, 편지 까지 왔다.");
        if (letterFeign.findLetter(memberId)) return true;

        return false;
    }
}