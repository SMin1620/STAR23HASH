package com.letter.noteservice.note.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

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
        @JsonFormat(pattern = "yyyy-MM-dd")
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
        @JsonFormat(pattern = "yyyy-MM-dd")
        private LocalDateTime createdAt;
        private Boolean isRead;
        private Boolean isReply;
    }

    /**
     * 오늘 온 쪽지 방 목록 조회
     */
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class RoomListTodayResDto {
        private Long memberId;
        private Integer count;
        private List<RoomListResDto> roomListResDtoList;
    }



}
