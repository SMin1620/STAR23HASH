package com.letter.noteservice.note.repository;

import com.letter.noteservice.note.entity.Note;
import com.letter.noteservice.note.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {
    Optional<Room> findBySenderIdAndReceiverId(Long senderId, Long ReceiverId);

    /**
     * 쪽지 방에서 쪽지 목록 조회
     */
    @Query(value = "select r from Room r where r.senderId = :id")
    List<Room> findAllBySenderIdOrReceiverID(Long id);

    /**
     * 쪽지 방 목록 조회
     */
    @Query(value = "select r from Room r where r.senderId = :memberId or r.receiverId = :memberId")
    List<Room> findAllByRoom(Long memberId);
    List<Room> findAllByReceiverIdOrSenderId(Long receiverId, Long senderId);

    /**
     * 오늘 온 쪽지 방 목록 조회
     */
    List<Room> findAllByReceiverIdOrIsReadFalseAndCreatedAtBetween(Long memberId, LocalDateTime start, LocalDateTime end);
}
