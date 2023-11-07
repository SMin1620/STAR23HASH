package com.letter.letterservice.letter.controller;

import com.letter.letterservice.letter.entity.Letter;
import com.letter.letterservice.letter.repository.LetterRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/letters/feign")
public class LetterFeignController {

    private final LetterRepository letterRepository;

    @GetMapping("/alarm/{memberId}")
    public Boolean findNote(@PathVariable(name = "memberId") Long memberId) {
        // 날짜 계산
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime start = now.minusDays(1).withHour(18).withMinute(0).withSecond(0).withNano(0);
        LocalDateTime end = now.withHour(17).withMinute(59).withSecond(59).withNano(0);

        Optional<Letter> letter = letterRepository.findTopByReceiverIdAndStoreTrueAndCreateAtBetween(memberId, start, end);

        if (letter.isPresent()) return true;
        return false;
    }
}
