package com.letter.letter.member.dto;

import io.swagger.v3.oas.annotations.media.Schema;
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
        @Schema(example = "이름")
        private String name;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class MemberLoginRequestDto{

        @NotEmpty(message = "이메일은 필수 입력입니다.")
        @Pattern(regexp = "(?:\\w+\\.?)*\\w+@(?:\\w+\\.)+\\w+$", message = "이메일 형식이 올바르지 않습니다.")
        @Schema(example = "email@email.com")
        private String email;

        @NotEmpty(message = "비밀번호는 필수 입력입니다.")
//        @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{6,20}", message = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
        @Schema(example = "password")
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
        @Schema(example = "email@email.com")
        private String email;

        @NotEmpty(message = "비밀번호는 필수 입력입니다.")
        @Schema(example = "password")
        private String password;

        @NotEmpty(message = "이름은 필수 입력입니다.")
        @Schema(example = "이름")
        private String name;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class MemberRegisterResponseDto{
        private String email;
        private String password;
        private String name;
    }
}
