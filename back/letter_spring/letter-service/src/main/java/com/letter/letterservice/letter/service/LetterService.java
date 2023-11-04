package com.letter.letterservice.letter.service;

import com.letter.letterservice.config.AuthFeignClient;
import com.letter.letterservice.letter.dto.*;
import com.letter.letterservice.letter.entity.Letter;
import com.letter.letterservice.letter.repository.LetterRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Member;
import java.net.http.HttpRequest;
import java.util.List;
import java.util.stream.Collectors;

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

    public List<LetterResponseDto> getLetterList(HttpServletRequest request){
        Long receiverId = authFeignClient.getId(request.getHeader("Authorization"));

        List<Letter> letters = letterRepository.findByReceiverId(receiverId);

        List<LetterResponseDto> letterResponseDtos = letters.stream().map(
                LetterResponseDto::toDto
        ).collect(Collectors.toList());
        return letterResponseDtos;
    }

    @Transactional
    public Boolean createContact(HttpServletRequest request, ContactRequestDto contactRequestDto){
        authFeignClient.createContact(request.getHeader("Authorization"), contactRequestDto);
        return true;
    }

    public List<Contact> getContact(HttpServletRequest request){
        return authFeignClient.getContact(request.getHeader("Authorization"));
    }
}
