package com.letter.letterservice.letter.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LetterRequestDto {

    private String content;

    private String type;

    private String fileUrl;

    private String hintContent;

    private String phone;
}
