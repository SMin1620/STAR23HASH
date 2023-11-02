package com.letter.letterservice.letter.dto;

import com.letter.letterservice.letter.entity.Letter;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LetterResponseDto {

    private Long id;
    private Long senderId;
    private String content;
    private String type;
    private String fileUrl;
    private LocalDateTime createAt;
    private Long receiverId;
    private Boolean read;
    private String hintContent;

    public static LetterResponseDto toDto(Letter letter){
        return LetterResponseDto.builder()
                .id(letter.getId())
                .senderId(letter.getSenderId())
                .content(letter.getContent())
                .type(letter.getType())
                .fileUrl(letter.getFileUrl())
                .createAt(letter.getCreateAt())
                .receiverId(letter.getReceiverId())
                .read(letter.getRead())
                .hintContent(letter.getHintContent())
                .build();
    }

}
