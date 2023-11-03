package com.letter.authservice.member.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "rolls")
public class Roll {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "roll_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(nullable = false, name = "member_id")
    private Member member;
}
