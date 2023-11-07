package com.letter.authservice.member.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "letter-service")
public interface LetterFeign {

    /**
     * 쪽지 알람 체크
     */
    @GetMapping("/api/letters/feign/alarm/{memberId}")
    Boolean findLetter(@PathVariable(name = "memberId") Long memberId);
}
