package com.letter.authservice.member.service;

import com.letter.authservice.exception.BusinessLogicException;
import com.letter.authservice.exception.ExceptionCode;
import com.letter.authservice.member.dto.MemberDto;
import com.letter.authservice.member.dto.RollDto;
import com.letter.authservice.member.entity.Member;
import com.letter.authservice.member.entity.Paper;
import com.letter.authservice.member.entity.Roll;
import com.letter.authservice.member.repository.MemberRepository;
import com.letter.authservice.member.repository.PaperRepository;
import com.letter.authservice.member.repository.RollRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class RollService {

    private final MemberRepository memberRepository;
    private final RollRepository rollRepository;
    private final PaperRepository paperRepository;

    /**
     * 롤링페이퍼 생성
     */
    public RollDto.RollCreateResDto rollCreate(HttpServletRequest request,
                                               RollDto.RollCreateReqDto dto,
                                               Long rollId)
    {

//        Roll roll = rollRepository.findRollByMemberId(member.getId()).orElse(null);
        Roll roll = rollRepository.findById(rollId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ROLL_NOT_FOUND));

        Paper paper = Paper.builder()
                .roll(roll)
                .content(dto.getContent())
                .createdAt(LocalDateTime.now())
                .build();
        paperRepository.save(paper);

        return RollDto.RollCreateResDto.builder()
                .rollId(roll.getId())
                .memberId(roll.getMember().getId())
                .paper(RollDto.PaperListResDto.builder()
                        .id(paper.getId())
                        .content(paper.getContent())
                        .createdAt(paper.getCreatedAt())
                        .rollId(roll.getId())
                        .build())
                .build();
    }

    /**
     * 롤링페이퍼 조회
     */
    public RollDto.RollPaperListResDto rollList(HttpServletRequest request, Long rollId) {

        Roll roll = rollRepository.findById(rollId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ROLL_NOT_FOUND));

        // 현재 날짜 2023-11-03
        LocalDateTime start = LocalDateTime.parse(LocalDateTime.now().toString().substring(0, 10) + "T00:00:00");
        LocalDateTime end = LocalDateTime.now();

        List<Paper> paperList = paperRepository.findAllByRollIdAndIsReadFalseCreatedAtBetween(rollId, start, end);
        List<RollDto.PaperListResDto> paperListResDtos = new ArrayList<>();
        for (Paper paper : paperList) {
            RollDto.PaperListResDto paperListResDto = RollDto.PaperListResDto.builder()
                    .id(paper.getId())
                    .rollId(rollId)
                    .content(paper.getContent())
                    .createdAt(paper.getCreatedAt())
                    .build();

            paperListResDtos.add(paperListResDto);
        }

        return RollDto.RollPaperListResDto.builder()
                .rollId(rollId)
                .member(MemberDto.MemberResDto.builder().id(roll.getMember().getId()).phone(roll.getMember().getPhone()).build())
                .paperList(paperListResDtos)
                .build();

    }
}
