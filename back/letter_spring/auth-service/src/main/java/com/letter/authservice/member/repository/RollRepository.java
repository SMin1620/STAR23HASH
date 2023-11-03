package com.letter.authservice.member.repository;

import com.letter.authservice.member.entity.Roll;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RollRepository extends JpaRepository<Roll, Long> {
    Optional<Roll> findRollByMemberId(Long memberId);
}
