package com.letter.authservice.member.service;

import com.letter.authservice.member.entity.Member;
import com.letter.authservice.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@RequiredArgsConstructor
public class SchedulerService {

    private final MemberRepository memberRepository;

    @Transactional
    @Scheduled(cron = "0 0 17 * * ?")
    public void reset() {
        List<Member> memberList = memberRepository.findAllByIsWriteTrue();
        for (Member member : memberList) member.setIsWrite(false);
    }
}
