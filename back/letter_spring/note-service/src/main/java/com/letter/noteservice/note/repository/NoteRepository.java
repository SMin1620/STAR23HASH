package com.letter.noteservice.note.repository;

import com.letter.noteservice.note.entity.Note;
import org.aspectj.weaver.ast.Not;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
