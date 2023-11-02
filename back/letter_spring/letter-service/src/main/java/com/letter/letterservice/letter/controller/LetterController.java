package com.letter.letterservice.letter.controller;

import com.letter.letterservice.common.BaseResponse;
import com.letter.letterservice.letter.dto.ContactRequestDto;
import com.letter.letterservice.letter.dto.LetterRequestDto;
import com.letter.letterservice.letter.dto.MemberAnotherRequestDto;
import com.letter.letterservice.letter.service.LetterService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/letters")
@Tag(name = "편지 API")
public class LetterController {

    private final LetterService letterService;


    @PostMapping()
    public BaseResponse createLetter(HttpServletRequest request,
                                     @RequestBody @Valid LetterRequestDto letterRequestDto
                                     ){
        return new BaseResponse(HttpStatus.OK,"편지 보내기 성공",letterService.createLetter(request, letterRequestDto));
    }

    @GetMapping()
    public BaseResponse getLetterList(HttpServletRequest request){
        return new BaseResponse(HttpStatus.OK, "편지 리스트", letterService.getLetterList(request));
    }

    @PostMapping("/contact")
    public BaseResponse createContact(HttpServletRequest request,
                                      @RequestBody @Valid ContactRequestDto contactRequestDto
                                      ){
        return new BaseResponse(HttpStatus.OK, "연락처 저장", letterService.createContact(request, contactRequestDto));
    }

    @GetMapping("/contact")
    public BaseResponse getContact(HttpServletRequest request){
        return new BaseResponse(HttpStatus.OK, "연락처 리스트", letterService.getContact(request));
    }

}
