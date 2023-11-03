package com.letter.authservice.member.controller;

import com.letter.authservice.common.BaseResponse;
import com.letter.authservice.member.dto.RollDto;
import com.letter.authservice.member.service.RollService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/rolls")
public class RollController {

    private final RollService rollService;

    /**
     * 롤링페이퍼 작성
     */
    @PostMapping("/{rollId}")
    public BaseResponse rollCreate(
            HttpServletRequest request,
            @RequestBody RollDto.RollCreateReqDto dto,
            @PathVariable("rollId") Long rollId
    ) {
        RollDto.RollCreateResDto rollCreateResDto = rollService.rollCreate(request, dto, rollId);
        return new BaseResponse(HttpStatus.CREATED, "롤링페이퍼 작성 성공", rollCreateResDto);
    }

    /**
     * 롤링페이퍼 조회
     */
    @GetMapping("/{rollId}")
    public BaseResponse rollList(
            HttpServletRequest request,
            @PathVariable("rollId") Long rollId
    ) {
        RollDto.RollPaperListResDto rollPaperListResDto = rollService.rollList(request, rollId);
        return new BaseResponse(HttpStatus.OK, "롤링페이퍼 목록 조회 성공", rollPaperListResDto);
    }

}
