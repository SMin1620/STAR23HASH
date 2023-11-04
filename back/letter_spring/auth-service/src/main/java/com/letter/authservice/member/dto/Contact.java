package com.letter.authservice.member.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Contact {

    private String name;
    private String phone;

    public static Contact toDto(Contact contact){
        return Contact.builder()
                .name(contact.getName())
                .phone(contact.getPhone())
                .build();
    }

}
