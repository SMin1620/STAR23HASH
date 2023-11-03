package com.letter.authservice.member.mapper;

import com.letter.authservice.member.dto.RollDto;
import com.letter.authservice.member.entity.Roll;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RollMapper {
    RollDto.RollCreateReqDto rollToCreateDto(Roll roll);
}
