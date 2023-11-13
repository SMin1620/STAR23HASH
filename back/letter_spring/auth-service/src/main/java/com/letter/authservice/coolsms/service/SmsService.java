package com.letter.authservice.coolsms.service;


import com.letter.authservice.coolsms.dto.SmsCertificationRequest;
import com.letter.authservice.exception.BusinessLogicException;
import com.letter.authservice.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.request.SingleMessageSendingRequest;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import net.nurigo.sdk.message.service.DefaultMessageService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Random;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SmsService {

    private final RedisTemplate<String, String> redisTemplate;

    @Value("${cool-sms-from-phone-number}")
    private String coolSmsFromPhoneNumber;

    @Value("${cool-sms-key}")
    private String coolSmsKey;

    @Value("${cool-sms-secret}")
    private String coolSmsSecret;

    @Value("30")
    private long expirationTime;


    private DefaultMessageService messageService;


    // coolSms API를 이용하여 인증번호 발송하고, 발송 정보를 Redis에 저장
    @Transactional
    public Boolean sendSms(String phone){
        messageService = NurigoApp.INSTANCE.initialize( coolSmsKey, coolSmsSecret, "https://api.coolsms.co.kr");
        double balance = checkBalance();
        if(balance < 100){
            throw new BusinessLogicException(ExceptionCode.SOLD_OUT_POINT);
        }
        String certificationNum = createSmsKey();

        Message coolsms = new Message();
        coolsms.setFrom(coolSmsFromPhoneNumber);
        coolsms.setTo(phone);
        coolsms.setText("*23# 회원가입\n인증번호" + " : ["+certificationNum+"]");

        redisTemplate.opsForValue().set(
                phone,
                certificationNum,
                expirationTime,
                TimeUnit.MINUTES
        );

        // coolSms API 사용하여 사용자 핸드폰에 전송
        SingleMessageSentResponse response = messageService.sendOne(new SingleMessageSendingRequest(coolsms));
        return true;
    }

    @Transactional
    public Boolean verifySms(SmsCertificationRequest requestDto){
        String certificationNum = redisTemplate.opsForValue().get(requestDto.getPhone());
        System.out.println("phone : " + requestDto.getPhone());
        System.out.println("certificationNum : " + certificationNum);
        if(certificationNum != null && certificationNum.equals(requestDto.getCertificationNumber())){
            return true;
        }
        return false;
    }

    public String createSmsKey(){
        try{
            StringBuffer key = new StringBuffer();
            Random rnd = new Random();

            for(int i=0; i<5; i++){
                key.append((rnd.nextInt(10)));
            }
            return key.toString();
        }catch (Exception e){
            e.printStackTrace();
            return "0";
        }

    }

    public double checkBalance(){
        messageService = NurigoApp.INSTANCE.initialize( coolSmsKey, coolSmsSecret, "https://api.coolsms.co.kr");
        try{
            return Double.parseDouble(messageService.getBalance().getBalance().toString());
        }catch (Exception e){
            e.printStackTrace();
            return 0;
        }

    }


}
