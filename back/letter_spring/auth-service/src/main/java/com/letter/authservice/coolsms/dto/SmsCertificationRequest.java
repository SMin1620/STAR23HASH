package com.letter.authservice.coolsms.dto;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class SmsCertificationRequest {

    private String phone;

    private String certificationNumber;

}
