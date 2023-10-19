package com.letter.letter.member.controller;

import com.letter.letter.common.BaseResponse;
import com.letter.letter.member.dto.MemberDto;
import com.letter.letter.member.dto.TokenDto;
import com.letter.letter.member.entity.Member;
import com.letter.letter.member.mapper.MemberMapper;
import com.letter.letter.member.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "회원 API")
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper memberMapper;

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
    @Operation(summary = "회원가입")
    @PostMapping("/register")
    public BaseResponse register(@RequestBody MemberDto.MemberRegisterRequestDto requestBody){
        Member member =  memberService.memberRegister(requestBody);
        return new BaseResponse(HttpStatus.OK, "회원가입 성공", memberMapper.memberToResponseDto(member));
    }
}
