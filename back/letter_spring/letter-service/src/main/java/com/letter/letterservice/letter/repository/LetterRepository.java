package com.letter.letterservice.letter.repository;

import com.letter.letterservice.letter.entity.Letter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LetterRepository extends JpaRepository<Letter, Long> {
}
