package com.letter.authservice.member.controller;

import com.letter.authservice.common.BaseResponse;
import com.letter.authservice.exception.BusinessLogicException;
import com.letter.authservice.exception.ExceptionCode;
import com.letter.authservice.jwt.JwtTokenProvider;
import com.letter.authservice.member.dto.MemberDto;
import com.letter.authservice.member.dto.TokenDto;
import com.letter.authservice.member.entity.Member;
import com.letter.authservice.member.mapper.MemberMapper;
import com.letter.authservice.member.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper memberMapper;
    private final JwtTokenProvider jwtTokenProvider;

    /**
     * 로그인 (닉네임만 보내주기)
     */
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
     * 이메일 중복 확인
     */
    @GetMapping("/email")
    public BaseResponse emailDoubleCheck(@RequestParam String email){
        boolean isDouble = memberService.emailDoubleCheck(email);

        if(isDouble){
            return new BaseResponse(HttpStatus.OK, "이메일 중복 체크 성공", true);
        }else{
            return new BaseResponse(HttpStatus.OK, "이메일 중복 체크 성공", false);
        }
    }

    /**
     * 닉네임 중복 확인(api 명세서랑 다름)
     */
    @GetMapping("/nickname")
    public BaseResponse nicknameDoubleCheck(@RequestParam String nickname){
        boolean isDouble = memberService.nicknameDoubleCheck(nickname);

        if(isDouble) return new BaseResponse(HttpStatus.OK, "닉네임 중복 체크 성공", true);
        else return new BaseResponse(HttpStatus.OK, "닉네임 중복 체크 성공", false);
    }

    /**
     * 멤버 정보 확인(api 명세서랑 다름)
     */
    @GetMapping
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

        /**
     * 이미지 리롤
     */
    @GetMapping("/reroll")
    public BaseResponse reroll(
            HttpServletRequest request
            ) {
        String token = jwtTokenProvider.resolveToken(request);
        jwtTokenProvider.validateToken(token);

        String memberEmail = jwtTokenProvider.getUserEmail(token);

        Member member = memberService.reroll(memberEmail);

        return new BaseResponse(HttpStatus.OK, "reroll 성공", memberMapper.toResponse(member));
    }

}
