package com.letter.letterservice.letter.service;

import com.letter.letterservice.config.AuthFeignClient;
import com.letter.letterservice.letter.dto.Contact;
import com.letter.letterservice.letter.dto.ContactRequestDto;
import com.letter.letterservice.letter.dto.LetterRequestDto;
import com.letter.letterservice.letter.dto.MemberAnotherRequestDto;
import com.letter.letterservice.letter.entity.Letter;
import com.letter.letterservice.letter.repository.LetterRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.net.http.HttpRequest;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LetterService {


    private final LetterRepository letterRepository;
    private final AuthFeignClient authFeignClient;


    @Transactional
    public Boolean createLetter(HttpServletRequest request, LetterRequestDto letterRequestDto){

        Long senderId = authFeignClient.getId(request.getHeader("Authorization"));
        System.out.println(senderId);

        Long receiverId = authFeignClient.getAnotherId(request.getHeader("Authorization"), letterRequestDto.getPhone());

        letterRepository.save(Letter.toEntity(senderId, receiverId, letterRequestDto));
        letterRepository.flush();
        return true;
    }

    @Transactional
    public Boolean createContact(HttpServletRequest request, ContactRequestDto contactRequestDto){
        return true;
    }
}
