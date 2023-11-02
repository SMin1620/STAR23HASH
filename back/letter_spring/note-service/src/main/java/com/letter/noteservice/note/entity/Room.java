package com.letter.noteservice.note.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_id")
    private Long id;

    @Column(nullable = false, name = "sender_id")
    private Long senderId;

    @Column(nullable = false, name = "sender_name")
    private String senderName;

    @Column(nullable = false, name = "receiver_id")
    private Long receiverId;

    @Column(nullable = false, name = "receiver_name")
    private String receiverName;

    @Column(nullable = false, name = "is_read")
    @ColumnDefault("false")
    private Boolean isRead;

    @Column(nullable = false, name = "is_reply")
    @ColumnDefault("false")
    private Boolean isReply;

    @Column(nullable = false, name = "created_at")
    private LocalDateTime createdAt;

    @ColumnDefault("false")
    private Boolean store;

    private String sendStatus;
}
