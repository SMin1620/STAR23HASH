package com.letter.letter.member.mapper;

import com.letter.letter.member.dto.MemberDto;
import com.letter.letter.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    MemberDto.MemberLoginResponseDto memberToResponseDto(Member member);
}
