package com.letter.noteservice.note.controller;

import com.letter.noteservice.note.feign.AuthFeignClient;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/notes")
public class NoteController {

    private final AuthFeignClient authFeignClient;

    @GetMapping("/test")
    public String test(HttpServletRequest request) {
        String response = authFeignClient.findMember(request.getHeader("Authorization"));

        return "note test / " + request.getHeader("X-Authorization-Email") + " / " + response;
    }
}
