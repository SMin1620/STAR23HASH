package com.letter.authservice.member.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "note-service")
public interface NoteFeign {

    /**
     * 쪽지 알람 체크
     */
    @GetMapping("/api/notes/feign/alarm/{memberId}")
    Boolean findNote(@PathVariable(name = "memberId") Long memberId);
}
