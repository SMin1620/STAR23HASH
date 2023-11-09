package com.letter.noteservice.note.repository;

import com.letter.noteservice.note.entity.Note;
import com.letter.noteservice.note.entity.Room;
import org.aspectj.weaver.Member;
import org.aspectj.weaver.ast.Not;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface NoteRepository extends JpaRepository<Note, Long> {

//    @Query(value = "select n from Note n where n.room.id = :roomId and n.receiverId = :memberId")
//    List<Note> findByLastNote(Long roomId, Long memberId);

//    @Query(value = "select n from Note n where n.room.id =:roomId and n.receiverId =:memberId and n.isRead = false order by n.id desc")
//    Optional<Note> findRoomByNote(Long roomId, Long memberId);
    Optional<Note> findTopByRoomIdAndReceiverIdAndIsReadTrueAndIsStoreTrueOrderByCreatedAtDesc(Long roomId, Long memberId);


    /**
     * 쪽지 방의 쪽지 목록 조회
     */
    @Query(value = "select n from Note n where n.room.id =:roomId order by n.createdAt desc")
    List<Note> findAllByNote(Long roomId);

    /**
     * 오늘 온 쪽지 방 목록 조회
     */
    Optional<Note> findTopByRoomIdAndReceiverIdOrRoomIdAndSenderIdOrderByCreatedAtDesc(Long roomId1, Long receiverId, Long roomId2, Long senderId);

    /**
     * 쪽지 답장
     */
    // 답장시 이전 받은 메시지 답장 여부 처리
//    @Query(value = "select n from Note n where n.room.id =:roomId and n.receiverId =:memberId order by n.id desc")
//    Optional<Note> findByPreNote(Long roomId, Long memberId);
    Optional<Note> findTopByRoomIdAndReceiverIdOrderByCreatedAtDesc(Long roomId, Long receiverId);
    Optional<Note> findTopByRoomIdOrderByCreatedAtDesc(Long roomId);

    /**
     * 오늘 온 쪽지 방 목록 조회
     */
    Optional<Note> findAllByReceiverIdAndIsReadFalseAndIsStoreTrueAndCreatedAtBetweenOrderByCreatedAt(Long memberId, LocalDateTime start, LocalDateTime end);

    /**
     * 쪽지 보내기 스케줄러
     */
    List<Note> findAllByIsStoreFalse();

    /**
     * 쪽지 알람 체크
     */
    Optional<Note> findTopByReceiverIdAndIsStoreTrueAndCreatedAtBetween(Long memberId, LocalDateTime start, LocalDateTime end);
}
