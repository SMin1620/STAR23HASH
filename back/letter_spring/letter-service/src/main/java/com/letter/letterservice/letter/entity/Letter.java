package com.letter.letterservice.letter.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "letters")
public class Letter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "letter_id")
    private Long id;

    @Column(nullable = false)
    private Long senderId;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private Type type;

    private String fileUrl;

    @Column(nullable = false)
    private LocalDateTime createAt;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private Long receiverId;

    @Column(nullable = false)
    private Boolean read;

    private String hintContent;
}
