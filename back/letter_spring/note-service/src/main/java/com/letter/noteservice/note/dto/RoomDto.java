package com.letter.noteservice.note.dto;

import lombok.*;

import java.time.LocalDateTime;

/**
 * 꿈 일기 생성 Dto
 */
public class RoomDto {

    /**
     * 쪽지 방 상세 조회
     */
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class NoteCreateReqDto {
        private Long id;
        private Long senderId;
        private String senderName;
        private Long receiverId;
        private String receiverName;
        private LocalDateTime createdAt;
        private Boolean store;
    }

    /**
     * 쪽지 방 목록 조회
     */
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class RoomListResDto {
        private Long id;
        private Long senderId;
        private String senderName;
        private Long receiverId;
        private String receiverName;
        private LocalDateTime createdAt;
        private Boolean read;
        private Boolean store;
    }



}
