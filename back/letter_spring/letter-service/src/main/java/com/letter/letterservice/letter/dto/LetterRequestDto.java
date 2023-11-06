package com.letter.letterservice.letter.dto;

import com.letter.letterservice.letter.entity.Type;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LetterRequestDto {

    private String content;

    private int type;

    private String fileUrl;

    private String hintContent;

    private String phone;
}
