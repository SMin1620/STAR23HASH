package com.letter.noteservice.note.dto;

import lombok.*;

import java.time.LocalDateTime;

/**
 * 꿈 일기 생성 Dto
 */
public class NoteDto {

    /**
     * 랜덤 쪽지 생성 요청
     */
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class NoteCreateReqDto {
        private String content;
    }

    /**
     * 랜덤 쪽지 생성 응답
     */
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class NoteCreateResDto {
        private Long senderId;
        private String senderName;
        private Long receiverId;
        private String receiverName;
        private String content;
        private LocalDateTime createdAt;
        private Boolean read;
        private Boolean reply;
        private Long roomId;
    }
}
