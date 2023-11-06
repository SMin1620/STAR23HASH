package com.letter.letterservice.letter.entity;

import com.letter.letterservice.letter.dto.LetterRequestDto;
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
    private int type;

    private String fileUrl;

    @Column(nullable = false)
    private LocalDateTime createAt;

//    @Column(nullable = false)
//    private String nickname;

    @Column(nullable = false)
    private Long receiverId;

    @Column(nullable = false)
    private Boolean isRead;

    private String hintContent;

    private Boolean store;

    public static Letter toEntity(Long senderId, Long receiverId, LetterRequestDto letterRequestDto){
        return Letter.builder()
                .senderId(senderId)
                .content(letterRequestDto.getContent())
                .type(letterRequestDto.getType())
                .fileUrl(letterRequestDto.getFileUrl())
                .createAt(LocalDateTime.now())
                .receiverId(receiverId)
                .isRead(false)
                .hintContent(letterRequestDto.getHintContent())
                .store(false)
                .build();
    }

}
