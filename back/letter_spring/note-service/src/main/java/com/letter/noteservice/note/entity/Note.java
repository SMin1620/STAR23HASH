package com.letter.noteservice.note.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.BatchSize;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "notes")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "note_id")
    private Long id;

    @Column(nullable = false, name = "sender_id")
    private Long senderId;

    @Column(nullable = false, name = "sender_name")
    private String senderName;

    @Column(nullable = false, name = "receiver_id")
    private Long receiverId;

    @Column(nullable = false, name = "receiver_name")
    private String receiverName;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false, name = "created_at")
    private LocalDateTime createdAt;

    @Column(nullable = false, name = "is_read")
    private Boolean isRead;

    @Column(nullable = false, name = "is_reply")
    private Boolean isReply;

    private Boolean isStore;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(nullable = false, name = "room_id")
    private Room room;


}
