package com.letter.noteservice.note.controller;

import com.letter.noteservice.common.BaseResponse;
import com.letter.noteservice.note.dto.NoteDto;
import com.letter.noteservice.note.dto.RoomDto;
import com.letter.noteservice.note.entity.Note;
import com.letter.noteservice.note.entity.Room;
import com.letter.noteservice.note.feign.AuthFeignClient;
import com.letter.noteservice.note.mapper.NoteMapper;
import com.letter.noteservice.note.mapper.RoomMapper;
import com.letter.noteservice.note.service.NoteService;
import com.letter.noteservice.note.service.RoomService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.Path;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/notes")
public class NoteController {

    private final AuthFeignClient authFeignClient;
    private final NoteService noteService;
    private final RoomService roomService;
    private final NoteMapper noteMapper;
    private final RoomMapper roomMapper;

    @GetMapping("/test")
    public String test(HttpServletRequest request) {
        String response = authFeignClient.findMember(request.getHeader("Authorization"));

        return "note test / " + request.getHeader("X-Authorization-Email") + " / " + response;
    }

    /**
     * 랜덤 쪽지 생성
     */
    @PostMapping("")
    public BaseResponse noteCreate(
            HttpServletRequest request,
            @RequestBody NoteDto.NoteCreateReqDto dto
            ) {
        Note note = noteService.noteCreate(request, dto);
        NoteDto.NoteCreateResDto noteCreateResDto = noteMapper.noteToCreateDto(note);
        return new BaseResponse(HttpStatus.CREATED, "랜덤 쪽지 보내기 성공", noteCreateResDto);
    }

    /**
     * 쪽지 답장
     */
    @PostMapping("/room/{roomId}/reply")
    public BaseResponse noteReply(
            HttpServletRequest request,
            @RequestBody NoteDto.NoteCreateReqDto dto,
            @PathVariable("roomId") Long roomId
    ) {
        Note note = noteService.noteReply(request, dto, roomId);
        return new BaseResponse(HttpStatus.CREATED, "랜덤 쪽지 답장 성공", noteMapper.noteToCreateDto(note));
    }

    /**
     * 쪽지 방 목록 조회
     */
    @GetMapping("/room")
    public BaseResponse roomList(
            HttpServletRequest request
    ) {
        List<RoomDto.RoomListResDto> roomList = roomService.roomList(request);
        return new BaseResponse(HttpStatus.OK, "쪽지 방 목록 조회", roomList);
    }


    /**
     * 쪽지 목록 모든 날짜 조회
     */
    @GetMapping("/room/{roomId}")
    public BaseResponse noteList(
            HttpServletRequest request,
            @PathVariable("roomId") Long roomId
    ) {
        return new BaseResponse(HttpStatus.OK, "랜덤 쪽지 모든 날짜 목록 조회",  noteService.noteList(request, roomId));
    }

    /**
     * 쪽지 상세 조회
     */
    @GetMapping("/{noteId}")
    public BaseResponse noteDetail(
            HttpServletRequest request,
            @PathVariable("noteId") Long noteId
    ) {
        return new BaseResponse(HttpStatus.OK, "쪽지 상세 조회", noteService.noteDetail(request, noteId));
    }

}
