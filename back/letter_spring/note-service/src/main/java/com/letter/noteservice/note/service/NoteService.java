package com.letter.noteservice.note.service;

import com.letter.noteservice.common.BaseResponse;
import com.letter.noteservice.note.dto.NoteDto;
import com.letter.noteservice.note.entity.Note;
import com.letter.noteservice.note.feign.AuthFeignClient;
import com.letter.noteservice.note.mapper.NoteMapper;
import com.letter.noteservice.note.repository.NoteRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class NoteService {

    private final AuthFeignClient authFeignClient;
    private final NoteRepository noteRepository;

    /**
     * 랜덤 쪽지 생성 비즈니스 로직
     */
    @Transactional
    public Note noteCreate(HttpServletRequest request, NoteDto.NoteCreateReqDto dto) {

        // 요청 헤더에서 멤버 유니크 변수로 저장
        String phone = request.getHeader("Member-Authorization-Phone");
        System.out.println("phone >>> " + phone);

        // 랜덤 난수 로직
        NoteDto.NoteCreateResDto data = authFeignClient.findRandomMember(phone);
        System.out.println("data >>> " + data.toString() + " / " + data.getSenderName());

        // Entity
        Note note = Note.builder()
                .senderId(data.getSenderId())
                .senderName(data.getSenderName())
                .receiverId(data.getReceiverId())
                .receiverName(data.getReceiverName())
                .content(dto.getContent())
                .createdAt(LocalDateTime.now())
                .read(false)
                .reply(false)
                .build();
        noteRepository.save(note);

        return note;


    }
}
