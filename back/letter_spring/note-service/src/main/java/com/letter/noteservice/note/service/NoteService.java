package com.letter.noteservice.note.service;

import com.letter.noteservice.exception.BusinessLogicException;
import com.letter.noteservice.exception.ExceptionCode;
import com.letter.noteservice.note.dto.NoteDto;
import com.letter.noteservice.note.entity.Note;
import com.letter.noteservice.note.entity.Room;
import com.letter.noteservice.note.feign.AuthFeignClient;
import com.letter.noteservice.note.repository.NoteRepository;
import com.letter.noteservice.note.repository.RoomRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cglib.core.Local;
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


        // 쪽지 전송 중복 검사
        // 인증 서버에서 유저 id 가져오기
        try {
            authFeignClient.findByPhoneAndIsWriteFalse(phone);
        } catch (Exception e) {
            e.printStackTrace();
            throw new BusinessLogicException(ExceptionCode.MEMBER_ALREADY_WRITE);
        }


        // 랜덤 난수 로직
        NoteDto.NoteCreateResDto data = authFeignClient.findRandomMember(phone);
        System.out.println("data >>> " + data.getSenderName());

        // Room 생성 체크
//        roomRepository.findBySenderIdAndReceiverId(data.getSenderId(), data.getReceiverId())
//                        .ifPresent(r -> {new BusinessLogicException(ExceptionCode.ROOM_ALREADY_EXISTS);});

        Room room = Room.builder()
                .senderId(data.getSenderId())
                .senderName(data.getSenderName())
                .receiverId(data.getReceiverId())
                .receiverName(data.getReceiverName())
                .isRead(false)
                .isReply(false)
                .store(false)
                .createdAt(LocalDateTime.now())
                .recentAt(LocalDateTime.now())
                .isFirst(true)
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
                .isRead(false)
                .isReply(false)
                .isStore(false)
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

        // 인증 서버에서 유저 id 가져오기
        Long memberId = authFeignClient.findMemberId(phone);

        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ROOM_NOT_FOUND));

        // 쪽지 한번 답장 해야하는 로직 체크

        Note lastNote = noteRepository.findTopByRoomIdOrderByCreatedAtDesc(roomId).get();
        System.out.println("lastNote >>> " + lastNote + " " + lastNote.getSenderId() + " " + lastNote.getReceiverId() + " " + lastNote.getId());

        if (lastNote.getSenderId() == memberId) throw new BusinessLogicException(ExceptionCode.NOTE_ALREADY_REPLY);

        Note note = Note.builder()
                .senderId(lastNote.getReceiverId())
                .senderName(lastNote.getReceiverName())
                .receiverId(lastNote.getSenderId())
                .receiverName(lastNote.getSenderName())
                .content(dto.getContent())
                .createdAt(LocalDateTime.now())
                .isRead(false)
                .isReply(false)
                .isStore(false)
                .room(room)
                .build();

        noteRepository.save(note);
        room.setTemporaryAt(LocalDateTime.now());
        room.setIsFirst(false);

        // 이전 쪽지 답장 여부 처리
        Note preNote = noteRepository.findTopByRoomIdAndReceiverIdOrderByCreatedAtDesc(roomId, memberId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOTE_NOT_FOUND));
        preNote.setIsReply(true);

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

            if (note.getSenderId() != memberId && !note.getIsStore()) continue;

            // 보낸 사람 받는 사람 구분 처리
            if (note.getSenderId() == memberId) dto.setSend(true);
            else dto.setSend(false);

            // 읽음 처리
            if (note.getReceiverId() == memberId && ! note.getIsRead()) dto.setIsRead(false);
            else dto.setIsRead(true);

            // 답정 처리
            if (note.getSenderId() == memberId) dto.setIsReply(true);
            else if (note.getIsStore() && note.getReceiverId() == memberId && note.getIsReply()) dto.setIsReply(true);
            else dto.setIsReply(false);

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
        if (! note.getIsRead() && note.getSenderId() != memberId) updateNoteReadStatus(note);

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
        note.setIsRead(true);
    }

    /**
     * 랜덤 쪽지 작성 가능 여부 체크
     */
    public void writeCheck(HttpServletRequest request) {
        // 요청 헤더에서 멤버 유니크 변수로 저장
        String phone = request.getHeader("Member-Authorization-Phone");
        System.out.println("phone >>> " + phone);

        // 인증 서버에서 유저 id 가져오기
        if (authFeignClient.findByPhoneAndIsWriteCheck(phone)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_ALREADY_WRITE);
        }
    }
}
