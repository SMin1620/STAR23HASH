package com.letter.noteservice.note.service;

import com.letter.noteservice.common.BaseResponse;
import com.letter.noteservice.exception.BusinessLogicException;
import com.letter.noteservice.exception.ExceptionCode;
import com.letter.noteservice.note.dto.NoteDto;
import com.letter.noteservice.note.entity.Note;
import com.letter.noteservice.note.entity.Room;
import com.letter.noteservice.note.feign.AuthFeignClient;
import com.letter.noteservice.note.mapper.NoteMapper;
import com.letter.noteservice.note.repository.NoteRepository;
import com.letter.noteservice.note.repository.RoomRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class NoteService {

    private final AuthFeignClient authFeignClient;
    private final NoteRepository noteRepository;
    private final RoomRepository roomRepository;

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

        // Room 생성 체크
        roomRepository.findBySenderIdAndReceiverId(data.getSenderId(), data.getReceiverId())
                        .ifPresent(r -> {new BusinessLogicException(ExceptionCode.ROOM_ALREADY_EXISTS);});

        Room room = Room.builder()
                .senderId(data.getSenderId())
                .senderName(data.getSenderName())
                .receiverId(data.getReceiverId())
                .receiverName(data.getReceiverName())
                .read(false)
                .reply(false)
                .store(false)
                .createdAt(LocalDateTime.now())
                .build();
        roomRepository.save(room);

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
                .room(room)
                .build();
        noteRepository.save(note);

        return note;

    }

    /**
     * 쪽지 답장
     */
    @Transactional
    public Note noteReply(
            HttpServletRequest request,
            NoteDto.NoteCreateReqDto dto,
            Long roomId
    ) {
        // 요청 헤더에서 멤버 유니크 변수로 저장
        String phone = request.getHeader("Member-Authorization-Phone");
        System.out.println("phone >>> " + phone);

        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ROOM_NOT_FOUND));

        Note note = Note.builder()
                .senderId(room.getReceiverId())
                .senderName(room.getReceiverName())
                .receiverId(room.getSenderId())
                .receiverName(room.getSenderName())
                .content(dto.getContent())
                .createdAt(room.getCreatedAt())
                .read(false)
                .reply(false)
                .room(room)
                .build();

        noteRepository.save(note);

        return note;
    }

    /**
     * 쪽지 방의 모든 쪽지들 목록 조회
     */
    public List<NoteDto.NoteListResDto> noteList(
            HttpServletRequest request,
            Long roomId
    ) {
        // 요청 헤더에서 멤버 유니크 변수로 저장
        String phone = request.getHeader("Member-Authorization-Phone");
        System.out.println("phone >>> " + phone);

        // 인증 서버에서 유저 id 가져오기
        Long memberId = authFeignClient.findMemberId(phone);

        // 각 쪽지의 읽음 여부 처리 확인
        List<Note> noteList = noteRepository.findAllByNote(roomId);
        List<NoteDto.NoteListResDto> noteListResDtos = new ArrayList<>();
        for (Note note : noteList) {
            NoteDto.NoteListResDto dto = NoteDto.NoteListResDto.builder()
                    .id(note.getId())
                    .senderId(note.getSenderId())
                    .senderName(note.getSenderName())
                    .receiverId(note.getReceiverId())
                    .receiverName(note.getReceiverName())
                    .content(note.getContent())
                    .createdAt(note.getCreatedAt())
                    .build();

            if (note.getSenderId() == memberId) dto.setSend(true);
            else dto.setSend(false);

            if (note.getReceiverId() == memberId && ! note.getRead()) dto.setRead(false);
            else dto.setRead(true);

            noteListResDtos.add(dto);
        }

        return noteListResDtos;
    }


    /**
     * 쪽지 상세 조회
     * -> 읽음 여부 처리
     */
    @Transactional
    public NoteDto.NoteDetailResDto noteDetail(HttpServletRequest request, Long noteId) {
        // 요청 헤더에서 멤버 유니크 변수로 저장
        String phone = request.getHeader("Member-Authorization-Phone");
        System.out.println("phone >>> " + phone);

        // 인증 서버에서 유저 id 가져오기
        Long memberId = authFeignClient.findMemberId(phone);

        Note note = noteRepository.findById(noteId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOTE_NOT_FOUND));

        // 쪽지 읽음 처리 여부
        if (! note.getRead() && note.getSenderId() != memberId) updateNoteReadStatus(note);

        return NoteDto.NoteDetailResDto.builder()
                .id(note.getId())
                .senderId(note.getSenderId())
                .senderName(note.getSenderName())
                .receiverId(note.getReceiverId())
                .receiverName(note.getReceiverName())
                .content(note.getContent())
                .createdAt(note.getCreatedAt())
                .build();

    }

    @Transactional
    public void updateNoteReadStatus(Note note) {
        note.setRead(true);
    }
}
