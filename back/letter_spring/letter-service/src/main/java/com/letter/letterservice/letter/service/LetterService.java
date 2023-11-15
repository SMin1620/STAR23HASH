package com.letter.letterservice.letter.service;

import com.letter.letterservice.config.AuthFeignClient;
import com.letter.letterservice.exception.BusinessLogicException;
import com.letter.letterservice.exception.ExceptionCode;
import com.letter.letterservice.letter.dto.*;
import com.letter.letterservice.letter.entity.Letter;
import com.letter.letterservice.letter.repository.LetterRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.naming.CompositeName;
import java.lang.reflect.Member;
import java.net.http.HttpRequest;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LetterService {


    private final LetterRepository letterRepository;
    private final AuthFeignClient authFeignClient;
    private final RedisTemplate<String, Contact> redisTemplateObject;


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


        System.out.println("contacts : "+contactRequestDto.getContacts().toString());

        Long id = authFeignClient.getId(request.getHeader("Authorization"));
        /**
         * 전화번호 리스트를 만들기 전에 지우고 새로 만듦
         */
        redisTemplateObject.delete(id.toString());

        authFeignClient.createContact(request.getHeader("Authorization"), contactRequestDto);
        return true;
    }

    public List<Contact> getContact(HttpServletRequest request){
        return authFeignClient.getContact(request.getHeader("Authorization"));
    }

    /* 편지 상세 보기*/
    @Transactional
    public LetterResponseDto getDetailLetter(Long id){
        Letter letter = letterRepository.findById(id).orElseThrow(()->new BusinessLogicException(ExceptionCode.NOT_FOUND_LETTER));

        letter.updateRead();

        return LetterResponseDto.toDto(letter);

    }

    /**
     * 오늘 온 편지리스트
     */

    public List<LetterResponseDto> getTodayLetter(HttpServletRequest request){

        Long receiverId = authFeignClient.getId(request.getHeader("Authorization"));

        LocalDateTime now = LocalDateTime.now();
        LocalDateTime start = now.minusDays(1).withHour(17).withMinute(0).withSecond(0).withNano(0);
        LocalDateTime end = now.withHour(16).withMinute(59).withSecond(59).withNano(0);

        List<Letter> letters = letterRepository.findAllByReceiverIdAndIsReadFalseAndStoreTrueAndCreateAtBetween(receiverId, start, end);

        List<LetterResponseDto> letterResponseDtos = letters.stream()
                .map(LetterResponseDto::toDto)
                .collect(Collectors.toList());

        return letterResponseDtos;
    }

}
