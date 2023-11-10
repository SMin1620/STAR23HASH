package com.letter.noteservice.note.service;

import com.letter.noteservice.note.entity.Note;
import com.letter.noteservice.note.repository.NoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@RequiredArgsConstructor
public class SchedulerService {

    private final NoteRepository noteRepository;

    @Transactional
    @Scheduled(cron = "0 0 18 * * ?")
    public void reset() {
        List<Note> noteList = noteRepository.findAllByIsStoreFalse();
        for (Note note : noteList) {
            note.setIsStore(true);
            note.getRoom().setRecentAt(note.getRoom().getTemporaryAt());
        }
    }
}
