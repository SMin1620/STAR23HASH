package com.letter.authservice.member.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

public class RollDto {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class RollCreateReqDto {
        private String content;
        private Integer icon;
    }
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class RollCreateResDto {
        private Long rollId;
        private Long memberId;
        private PaperListResDto paper;
    }


    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class RollPaperListResDto {
        private Long rollId;
        private MemberDto.MemberResDto member;
        private List<PaperListResDto> paperList;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class PaperListResDto {
        private Long id;
        private String content;
        private Long rollId;
        private Integer icon;
        private Boolean isRead;
        @JsonFormat(pattern = "yyyy-MM-dd")
        private LocalDateTime createdAt;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class PaperDetailResDto {
        private Long id;
        private String content;
        private Long rollId;
        private Integer icon;
        private Boolean isRead;
        @JsonFormat(pattern = "yyyy-MM-dd")
        private LocalDateTime createdAt;
    }
}
