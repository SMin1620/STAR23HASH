package com.letter.letterservice.letter.controller;

import com.letter.letterservice.common.BaseResponse;
import com.letter.letterservice.letter.dto.LetterRequestDto;
import com.letter.letterservice.letter.dto.MemberAnotherRequestDto;
import com.letter.letterservice.letter.service.LetterService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/letters")
@Tag(name = "편지 API")
public class LetterController {

    private final LetterService letterService;


    @PostMapping()
    public BaseResponse registLetter(HttpServletRequest request,
                                     @RequestBody @Valid LetterRequestDto letterRequestDto
                                     ){
        return new BaseResponse(HttpStatus.OK,"편지 보내기 성공",letterService.createLetter(request, letterRequestDto));
    }

}
