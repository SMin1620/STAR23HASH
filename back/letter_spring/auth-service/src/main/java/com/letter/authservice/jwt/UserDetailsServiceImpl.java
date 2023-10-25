package com.letter.authservice.jwt;

import com.letter.authservice.member.entity.Member;
import com.letter.authservice.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserDetailsServiceImpl implements UserDetailsService {

    private final MemberRepository memberRepository;

    /**
     * UserDetailsService 인터페이스를 구현한 클래스
     * loadUserByUsername 메소드를 오버라이드 : 넘겨받은 UserDetails 와 Authentication 의 패스워드를 비교하고 검증하는 로직을 처리
     * 유저에 대한 검증이 완료되면 Authentication 객체 리턴
     * */

    @Override
    public UserDetails loadUserByUsername(String phone) throws UsernameNotFoundException {

        Member member = memberRepository.findByPhone(phone)
                // 전달된 이메일과 같은 유저가 없다면, 예외처리 발생.
                .orElseThrow(() -> {
                    log.error("Invalid authentication!");
                    return new UsernameNotFoundException("Invalid authentication!");
                });

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();

        return org.springframework.security.core.userdetails.User.builder()
                .username(phone)
                .password(member.getPassword())
                .authorities(grantedAuthorities)
                .build();


//        return PrincipalDetails.create(user);


    }





}
