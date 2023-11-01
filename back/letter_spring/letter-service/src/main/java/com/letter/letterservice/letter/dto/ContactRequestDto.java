package com.letter.letterservice.letter.dto;

import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ContactRequestDto {

    private List<Contact> contacts;
}
