package com.letter.noteservice.note.repository;

import com.letter.noteservice.note.entity.Note;
import org.aspectj.weaver.ast.Not;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface NoteRepository extends JpaRepository<Note, Long> {

//    @Query(value = "select n from Note n where n.room.id = :roomId and n.receiverId = :memberId")
//    List<Note> findByLastNote(Long roomId, Long memberId);

    @Query(value = "select n from Note n where n.room.id =:roomId and n.receiverId =:memberId and n.read = false order by n.id desc")
    Optional<Note> findRoomByNote(Long roomId, Long memberId);


    /**
     * 쪽지 방의 쪽지 목록 조회
     */
    @Query(value = "select n from Note n where n.room.id =:roomId")
    List<Note> findAllByNote(Long roomId);

    /**
     * 쪽지 답장
     */
    // 답장시 이전 받은 메시지 답장 여부 처리
//    @Query(value = "select n from Note n where n.room.id =:roomId and n.receiverId =:memberId order by n.id desc")
//    Optional<Note> findByPreNote(Long roomId, Long memberId);
    Optional<Note> findTopByRoomIdAndReceiverIdOrderByCreatedAtDesc(Long roomId, Long memberId);


}
