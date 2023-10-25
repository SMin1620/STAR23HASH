package com.letter.authservice.member.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.*;

public class MemberDto {

    /**
     * 로그인 반환 Dto
     */
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class MemberLoginResponseDto{
        private String nickname;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class MemberLoginRequestDto{

        @NotEmpty(message = "이메일은 필수 입력입니다.")
        @Pattern(regexp = "(?:\\w+\\.?)*\\w+@(?:\\w+\\.)+\\w+$", message = "이메일 형식이 올바르지 않습니다.")
        private String email;

        @NotEmpty(message = "비밀번호는 필수 입력입니다.")
//        @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{6,20}", message = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
        private String password;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class MemberRegisterRequestDto{
        @NotEmpty(message = "이메일은 필수 입력입니다.")
        @Pattern(regexp = "(?:\\w+\\.?)*\\w+@(?:\\w+\\.)+\\w+$", message = "이메일 형식이 올바르지 않습니다.")
        private String email;

        @NotEmpty(message = "비밀번호는 필수 입력입니다.")
        private String password;
        private String nickname;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class MemberRegisterResponseDto{
        private String email;
        private String password;
    }


    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response{
        private long id;
        private String email;
        private String nickname;
        private String birth;
        private String gender;
        private int isWrite;
        private long positiveCoin;
        private long negativeCoin;
        private long neutralCoin;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class KafkaProduce{
        private long id;
        private String email;
    }
}
