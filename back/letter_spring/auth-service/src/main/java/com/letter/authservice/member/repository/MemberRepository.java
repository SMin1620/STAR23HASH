package com.letter.authservice.member.repository;

import com.letter.authservice.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByPhone(String phone);
    Optional<Member> findByPhoneAndIsWriteFalse(String phone);
    Optional<Member> findById(Long id);

    Long countBy();

    @Query(value = "select * from members order by RAND() limit 1", nativeQuery = true)
    Member findByRandom();


    /**
     * 작성 제한 스케줄러
     */
    List<Member> findAllByIsWriteTrue();
}
