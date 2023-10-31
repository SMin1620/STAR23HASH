package com.letter.letterservice.config;

import com.letter.letterservice.letter.dto.MemberAnotherRequestDto;
import jakarta.validation.Valid;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "auth-service")
public interface AuthFeignClient {

//    @GetMapping("/api/members/test")
//    String findMember(@RequestHeader String token);

    @GetMapping("/api/members")
    Long getId(@RequestHeader String token);

    @GetMapping("/api/members/another/{phone}")
    Long getAnotherId(@RequestHeader String token, @PathVariable("phone") String phone);
}
