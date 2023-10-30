package com.letter.noteservice.note.entity;

import jakarta.persistence.*;
import lombok.*;

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

    @Column(nullable = false)
    private Long sender_id;

    @Column(nullable = false)
    private String sender_name;

    @Column(nullable = false)
    private Long receiver_id;

    @Column(nullable = false)
    private String receiver_name;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private Boolean read;

    @Column(nullable = false)
    private Boolean reply;

}
