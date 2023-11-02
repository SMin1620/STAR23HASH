package com.letter.noteservice.note.mapper;

import com.letter.noteservice.note.dto.NoteDto;
import com.letter.noteservice.note.dto.RoomDto;
import com.letter.noteservice.note.entity.Note;
import com.letter.noteservice.note.entity.Room;
import org.mapstruct.Mapper;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


@Mapper(componentModel = "spring")
public interface RoomMapper {

    /**
     * 쪽지 방 상세 조회
     */
    RoomDto.NoteCreateReqDto findRoom(Room room);

    /**
     * 쪽지 방 목록 조회
     */
    List<RoomDto.NoteCreateReqDto> findAllRoom(List<Room> room);


}
