package com.letter.noteservice.note.mapper;

import com.letter.noteservice.note.dto.NoteDto;
import com.letter.noteservice.note.entity.Note;
import com.letter.noteservice.note.entity.Room;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper(componentModel = "spring")
public interface NoteMapper {

    /**
     *  쪽지 생성 매퍼
     */
    NoteDto.NoteCreateResDto noteToCreateDto(Note note);

    /**
     * 쪽지 모든 날짜 목록 조회 매퍼
     */
    List<NoteDto.NoteListResDto> noteToListDto(List<Room> noteList);

}
