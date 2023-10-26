package com.letter.authservice.member.repository;

import com.letter.authservice.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByPhone(String phone);
    Optional<Member> findById(Long id);
}
