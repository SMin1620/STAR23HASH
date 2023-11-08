package com.letter.authservice.member.service;

import com.letter.authservice.exception.BusinessLogicException;
import com.letter.authservice.exception.ExceptionCode;
import com.letter.authservice.jwt.JwtTokenProvider;
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
    private final JwtTokenProvider jwtTokenProvider;

    /**
     * 롤링페이퍼 생성
     */
    public RollDto.RollCreateResDto rollCreate(
            RollDto.RollCreateReqDto dto
    ) {
        Roll roll = rollRepository.findById(dto.getRollId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ROLL_NOT_FOUND));

        Paper paper = Paper.builder()
                .roll(roll)
                .content(dto.getContent())
                .createdAt(LocalDateTime.now())
                .icon(dto.getIcon())
                .isRead(false)
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
                        .icon(paper.getIcon())
                        .isRead(false)
                        .build())
                .build();
    }

    /**
     * 롤링페이퍼 조회
     */
    public RollDto.RollPaperListResDto rollList(Long rollId) {

        // 날짜 계산
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime start = now.minusDays(1).withHour(18).withMinute(0).withSecond(0).withNano(0);
        LocalDateTime end = now.withHour(17).withMinute(59).withSecond(59).withNano(0);

        System.out.println("날짜 >>> " + start + " " + end);

        Roll roll = rollRepository.findById(rollId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ROLL_NOT_FOUND));



        List<Paper> paperList = paperRepository.findAllByRollIdAndCreatedAtBetween(roll.getId(), start, end);
        List<RollDto.PaperListResDto> paperListResDtos = new ArrayList<>();
        for (Paper paper : paperList) {
            RollDto.PaperListResDto paperListResDto = RollDto.PaperListResDto.builder()
                    .id(paper.getId())
                    .rollId(roll.getId())
                    .content(paper.getContent())
                    .icon(paper.getIcon())
                    .createdAt(paper.getCreatedAt())
                    .isRead(paper.getIsRead())
                    .build();

            paperListResDtos.add(paperListResDto);
        }

        return RollDto.RollPaperListResDto.builder()
                .rollId(roll.getId())
                .member(MemberDto.MemberResDto.builder().id(roll.getMember().getId()).phone(roll.getMember().getPhone()).build())
                .paperList(paperListResDtos)
                .build();

    }

    /**
     * 페이퍼 상세 조회
     * -> 읽음 처리
     */
    public RollDto.PaperDetailResDto paperDetail(HttpServletRequest request, Long paperId, Long memberId) {
        Paper paper = paperRepository.findById(paperId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAPER_NOT_FOUND));

        if (paper.getRoll().getMember().getId() != memberId) throw new BusinessLogicException(ExceptionCode.PAPER_MEMBER_DIFFERENT);

        paper.setIsRead(true);

        return RollDto.PaperDetailResDto.builder()
                .id(paperId)
                .rollId(paper.getRoll().getId())
                .content(paper.getContent())
                .icon(paper.getIcon())
                .createdAt(paper.getCreatedAt())
                .isRead(paper.getIsRead())
                .build();
    }

    /**
     * 롤링페이퍼 링크 생성
     */
    public RollDto.RollLinkDto rollLink(Long memberId) {
        Roll roll = rollRepository.findByMemberId(memberId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ROLL_NOT_FOUND));

        return RollDto.RollLinkDto.builder()
                .rollId(roll.getId())
                .build();
    }
}
