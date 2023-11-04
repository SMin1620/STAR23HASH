package com.letter.letterservice.config;

import com.letter.letterservice.letter.dto.Contact;
import com.letter.letterservice.letter.dto.ContactRequestDto;
import com.letter.letterservice.letter.dto.MemberAnotherRequestDto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "auth-service")
public interface AuthFeignClient {

//    @GetMapping("/api/members/test")
//    String findMember(@RequestHeader String token);

    @GetMapping("/api/members")
    Long getId(@RequestHeader String token);

    @GetMapping("/api/members/another/{phone}")
    Long getAnotherId(@RequestHeader String token, @PathVariable("phone") String phone);

    @PostMapping("/api/members/contact")
    Boolean createContact(@RequestHeader String token, @RequestBody @Valid ContactRequestDto contactRequestDto);

    @GetMapping("/api/members/contact")
    List<Contact> getContact(@RequestHeader String token);

}
