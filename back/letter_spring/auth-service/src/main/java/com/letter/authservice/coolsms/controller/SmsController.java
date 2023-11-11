package com.letter.authservice.coolsms.controller;

import com.letter.authservice.common.BaseResponse;
import com.letter.authservice.coolsms.dto.SmsCertificationRequest;
import com.letter.authservice.coolsms.dto.SmsPhoneRequest;
import com.letter.authservice.coolsms.service.SmsService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Tag(name = "문자 인증 API")
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/sms")
public class SmsController {


    private final SmsService smsService;

    // 인증번호 발송
    @PostMapping("/sends")
    public BaseResponse sendSms(@RequestBody @Valid SmsPhoneRequest requestDto){

        return new BaseResponse(HttpStatus.OK, "문자 인증번호 발송", smsService.sendSms(requestDto.getPhone()));
    }

    // 인증번호 확인
    @PostMapping("/confirms")
    public BaseResponse smsVerification(@RequestBody @Valid SmsCertificationRequest requestDto){
        return new BaseResponse(HttpStatus.OK, "문자 인증번호 확인", smsService.verifySms(requestDto));
    }



}
