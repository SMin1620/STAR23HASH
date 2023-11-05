package com.letter.noteservice.note.feign;

import com.letter.noteservice.note.dto.NoteDto;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "auth-service")
public interface AuthFeignClient {

    @GetMapping("/api/members/test")
    String findMember(@RequestHeader String token);

    /**
     * 본인 phone 를 인증 서버로 보냄
     */
    @PostMapping("/api/members/feign/random")
    NoteDto.NoteCreateResDto findRandomMember(String phone);

    /**
     * 유저 id 가져오기
     */
    @GetMapping("/api/members/feign/{phone}")
    Long findMemberId(@PathVariable(name = "phone") String phone);
    @GetMapping("/api/members/feign/{phone}/write")
    Long findByPhoneAndIsWriteFalse(@PathVariable(name = "phone") String phone);


    /**
     * 랜덤 쪽지 작성 가능 여부 체크
     */
    @GetMapping("/api/members/feign/{phone}/write/check")
    Boolean findByPhoneAndIsWriteCheck(@PathVariable(name = "phone") String phone);
}