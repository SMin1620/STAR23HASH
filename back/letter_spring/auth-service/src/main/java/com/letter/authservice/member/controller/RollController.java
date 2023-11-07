package com.letter.authservice.member.controller;

import com.letter.authservice.common.BaseResponse;
import com.letter.authservice.jwt.JwtTokenProvider;
import com.letter.authservice.member.dto.RollDto;
import com.letter.authservice.member.entity.Member;
import com.letter.authservice.member.service.MemberService;
import com.letter.authservice.member.service.RollService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/rolls")
public class RollController {

    private final RollService rollService;
    private final JwtTokenProvider jwtTokenProvider;
    private final MemberService memberService;

    /**
     * 롤링페이퍼 작성
     */
    @PostMapping("")
    public BaseResponse rollCreate(
            HttpServletRequest request,
            @RequestBody RollDto.RollCreateReqDto dto
    ) {
        //////////////////////// 토큰으로 인가된 사용자 정보 처리하는 로직
        String token = jwtTokenProvider.resolveToken(request);
        jwtTokenProvider.validateToken(token);

        System.out.println("token >>> " + token);

        Authentication authentication = jwtTokenProvider.getAuthentication(token);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        String memberEmail = userDetails.getUsername();

        Member member = memberService.memberInfo(memberEmail);

        RollDto.RollCreateResDto rollCreateResDto = rollService.rollCreate(request, dto, member.getId());
        return new BaseResponse(HttpStatus.CREATED, "롤링페이퍼 작성 성공", rollCreateResDto);
    }

    /**
     * 롤링페이퍼 조회
     */
    @GetMapping("")
    public BaseResponse rollList(
            HttpServletRequest request
    ) {
        //////////////////////// 토큰으로 인가된 사용자 정보 처리하는 로직
        String token = jwtTokenProvider.resolveToken(request);
        jwtTokenProvider.validateToken(token);

        System.out.println("token >>> " + token);

        Authentication authentication = jwtTokenProvider.getAuthentication(token);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        String memberEmail = userDetails.getUsername();

        Member member = memberService.memberInfo(memberEmail);

        RollDto.RollPaperListResDto rollPaperListResDto = rollService.rollList(request, member.getId());
        return new BaseResponse(HttpStatus.OK, "롤링페이퍼 목록 조회 성공", rollPaperListResDto);
    }

    /**
     * 롤링페이퍼 상세조회
     */
    @GetMapping("/paper/{paperId}")
    public BaseResponse paperDetail(
            HttpServletRequest request,
            @PathVariable("paperId") Long paperId
    ) {
        return new BaseResponse(HttpStatus.OK, "쪽지 상세 조회 성공", rollService.paperDetail(request, paperId));
    }

}
