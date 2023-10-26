package com.letter.authservice.member.mapper;

import com.letter.authservice.member.dto.MemberDto;
import com.letter.authservice.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    MemberDto.MemberLoginResponseDto memberToResponseDto(Member member);

    MemberDto.Response toResponse(Member member);

    MemberDto.KafkaProduce toKafkaProduce(Member member);
}
