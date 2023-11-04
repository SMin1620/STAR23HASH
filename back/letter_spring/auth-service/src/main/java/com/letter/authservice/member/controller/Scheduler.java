package com.letter.authservice.member.controller;

import com.letter.authservice.member.entity.Member;
import com.letter.authservice.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class Scheduler {

    private final MemberRepository memberRepository;

    @Scheduled(cron = "0 0 18 * * ?")
    public void reset() {
        List<Member> memberList = memberRepository.findAll();
        for (Member member : memberList) member.setIsWrite(false);
    }
}
