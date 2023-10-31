package com.letter.noteservice.note.mapper;

import com.letter.noteservice.note.dto.NoteDto;
import com.letter.noteservice.note.entity.Note;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface NoteMapper {

    NoteDto.NoteCreateResDto noteToCreateDto(Note note);
}
