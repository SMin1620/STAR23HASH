package com.letter.letterservice.letter.service;

import com.letter.letterservice.letter.entity.Letter;
import com.letter.letterservice.letter.repository.LetterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@RequiredArgsConstructor
public class SchedulerService {

    private final LetterRepository letterRepository;

    @Transactional
    @Scheduled(cron = "0 0 18 * * ?")
    public void reset() {
        List<Letter> letterList = letterRepository.findAllByStoreFalse();
        for (Letter letter : letterList) letter.setStore(true);
    }
}
