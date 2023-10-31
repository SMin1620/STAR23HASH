package com.letter.authservice.member.dto;


import lombok.*;

public class MemberFeignDto {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class MemberFeignRandomDto {
        private Long senderId;
        private String senderName;
        private Long receiverId;
        private String receiverName;
    }
}
