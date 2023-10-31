package com.letter.letterservice.config;

import feign.RequestInterceptor;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Slf4j
@RequiredArgsConstructor
@Configuration
public class CustomConfig {

    @Bean
    public RequestInterceptor requestInterceptor(HttpServletRequest request){
        return requestTemplate -> requestTemplate.header("Authorization", request.getHeader("Authorization"));
    }
}
