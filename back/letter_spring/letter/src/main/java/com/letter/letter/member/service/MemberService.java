package com.letter.letter.member.service;

import com.letter.letter.exception.BusinessLogicException;
import com.letter.letter.exception.ExceptionCode;
import com.letter.letter.jwt.JwtTokenProvider;
import com.letter.letter.member.dto.MemberDto;
import com.letter.letter.member.dto.TokenDto;
import com.letter.letter.member.entity.Member;
import com.letter.letter.member.entity.Role;
import com.letter.letter.member.respository.MemberRepository;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;
    private final RedisTemplate<String, String> redisTemplate;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;


    /**
     * 로그인
     */
    @Transactional
    public TokenDto memberLogin(HttpServletResponse response, MemberDto.MemberLoginRequestDto requestBody) {
        Member member = memberRepository.findByEmail(requestBody.getEmail()).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        System.out.println("로그인 시작 ");
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        requestBody.getEmail(),
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
    

    /**
     * 회원가입
     */
    @Transactional
    public Member memberRegister(MemberDto.MemberRegisterRequestDto requestBody) {
        Member member = Member.builder()
                .email(requestBody.getEmail())
                .password(passwordEncoder.encode(requestBody.getPassword()))
                .name(requestBody.getName())
                .createAt(LocalDateTime.now())
                .role(Role.USER)
                .build();

        memberRepository.save(member);
        return member;

    }
}
