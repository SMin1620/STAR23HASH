package com.letter.authservice.member.repository;

import com.letter.authservice.member.entity.Paper;
import com.letter.authservice.member.entity.Roll;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface PaperRepository extends JpaRepository<Paper, Long> {
    List<Paper> findAllByRollId(Long rollId);
    List<Paper> findAllByRollIdAndCreatedAtBetween(Long rollId, LocalDateTime start, LocalDateTime end);

    Optional<Paper> findTopByRollIdAndCreatedAtBetween(Long rollId, LocalDateTime start, LocalDateTime end);
}
