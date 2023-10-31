package com.letter.authservice.member.controller;

import com.letter.authservice.member.dto.MemberFeignDto;
import com.letter.authservice.member.entity.Member;
import com.letter.authservice.member.repository.MemberRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/members/feign")
public class MemberFeignController {

    private final MemberRepository memberRepository;

    /**
     * 유저 랜덤 난수 컨트롤러
     */
    @PostMapping("/random")
    public MemberFeignDto.MemberFeignRandomDto randomMember(
            HttpServletResponse response,
            HttpServletRequest request,
            @RequestBody String phone) {
        System.out.println("인증서버 - 랜덤 로직 실행 / phone : " + phone );

        // 게이트웨이 검증 통과 로직
        response.setHeader("Authorization", request.getHeader("Authorization"));
        
        // 램던 쪽지 받는 사람과 보내는 사람 중복을 금지 로직
        Member member = new Member();
        while (true) {
            member = memberRepository.findByRandom();
            if (! member.getPhone().equals(phone)) break;
        }
        
        return MemberFeignDto.MemberFeignRandomDto.builder()
                .senderId(memberRepository.findByPhone(phone).get().getId())
                .senderName("보낸 사람 닉네임")
                .receiverId(member.getId())
                .receiverName("받는 사람 닉네임")
                .build();
    }
}
