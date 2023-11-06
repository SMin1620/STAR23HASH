package com.letter.authservice.member.controller;

import com.letter.authservice.common.BaseResponse;
import com.letter.authservice.exception.BusinessLogicException;
import com.letter.authservice.exception.ExceptionCode;
import com.letter.authservice.jwt.JwtTokenProvider;
import com.letter.authservice.member.dto.Contact;
import com.letter.authservice.member.dto.ContactRequestDto;
import com.letter.authservice.member.dto.MemberDto;
import com.letter.authservice.member.dto.TokenDto;
import com.letter.authservice.member.entity.Member;
import com.letter.authservice.member.mapper.MemberMapper;
import com.letter.authservice.member.service.MemberService;
import com.netflix.eureka.cluster.HttpReplicationClient;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "회원 API")
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper memberMapper;
    private final JwtTokenProvider jwtTokenProvider;


    @GetMapping("/test")
    public String test(HttpServletResponse response, HttpServletRequest request) {
        System.out.println("auth test");

//        response.setHeader("Authorization", request.getHeader("Authorization"));
        return "auth test";
    }

    /**
     * 로그인 (닉네임만 보내주기)
     */
    @Operation(summary = "로그인")
    @PostMapping("/login")
    public BaseResponse login(HttpServletResponse response, @RequestBody MemberDto.MemberLoginRequestDto requestBody) {
        TokenDto tokenDto = memberService.memberLogin(response, requestBody);
        return new BaseResponse(HttpStatus.OK, "로그인 성공", tokenDto);
    }

    /**
     * 회원 가입
     */
    @PostMapping("/register")
    public BaseResponse register(@RequestBody MemberDto.MemberRegisterRequestDto requestBody){
        Member member =  memberService.memberRegister(requestBody);
        return new BaseResponse(HttpStatus.OK, "회원가입 성공", memberMapper.memberToResponseDto(member));
    }


    /**
     * 멤버 정보 확인(api 명세서랑 다름)
     */
    @GetMapping("/mypage")
    public BaseResponse getMemberInfo(HttpServletRequest request)  {
        //////////////////////// 토큰으로 인가된 사용자 정보 처리하는 로직
        String token = jwtTokenProvider.resolveToken(request);
        jwtTokenProvider.validateToken(token);

        System.out.println("token >>> " + token);

        Authentication authentication = jwtTokenProvider.getAuthentication(token);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        String memberEmail = userDetails.getUsername();

        Member member = memberService.memberInfo(memberEmail);

        return new BaseResponse(HttpStatus.OK, "로그인 성공", memberMapper.toResponse(member));
    }


    /**
     * 리프레시 토큰으로 엑세스 토큰 재발급
     */
    @PostMapping("/refresh")
    public BaseResponse refresh(
            HttpServletRequest request,
            HttpServletResponse response
    ){
        System.out.println("재발급 로직 시작");
        try {
            return new BaseResponse(HttpStatus.CREATED, "엑세스 토큰 재발급", memberService.refresh(request, response));
        }catch (Exception e){
            e.printStackTrace();
            throw new BusinessLogicException(ExceptionCode.INVALID_REFRESH_TOKEN);
        }
    }

    @GetMapping()
    public Long getId(HttpServletRequest request){
        return memberService.getId(request);
    }
    @GetMapping("/another/{phone}")
    public Long getAnotherId(@PathVariable("phone") String phone){
        return memberService.getAnotherId(phone);
    }

    @PostMapping("/contact")
    public Boolean createContact(HttpServletRequest request, @RequestBody @Valid ContactRequestDto contactRequestDto){
        return memberService.createContact(request, contactRequestDto);
    }

    @GetMapping("/contact")
    public List<Contact> getContact(HttpServletRequest request){

        return memberService.checkContact(request);
    }
    /**
     * 테스트용 : 모든 유저 1일 1회 작성 횟수 초기화
     */
    @GetMapping("/reset")
    public BaseResponse reset() {
        return new BaseResponse(HttpStatus.OK, "초기화", memberService.reset());
    }

    /**
     * 사용자 회원가입 시 폰 번호 중복 체크
     */
    @GetMapping("/check/{phone}")
    public BaseResponse phoneCheck(
            HttpServletRequest request,
            @PathVariable("phone") String phone
    ) {
        return new BaseResponse(HttpStatus.OK, "폰 번호 중복 검사", memberService.checkPhone(phone));
    }

    /**
     * 사용자 랜덤 쪽지 작성 여부 체크
     */
    @GetMapping("/write/check")
    public BaseResponse writeCheck(
            HttpServletRequest request
    ) {
        memberService.writeCheck(request);
        return new BaseResponse(HttpStatus.OK, "작성 가능", true);
    }
}
