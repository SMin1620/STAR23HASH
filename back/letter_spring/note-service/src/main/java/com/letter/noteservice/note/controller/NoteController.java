package com.letter.noteservice.note.controller;

import com.letter.noteservice.common.BaseResponse;
import com.letter.noteservice.note.dto.NoteDto;
import com.letter.noteservice.note.entity.Note;
import com.letter.noteservice.note.feign.AuthFeignClient;
import com.letter.noteservice.note.mapper.NoteMapper;
import com.letter.noteservice.note.service.NoteService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/notes")
public class NoteController {

    private final AuthFeignClient authFeignClient;
    private final NoteService noteService;
    private final NoteMapper noteMapper;

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

}
