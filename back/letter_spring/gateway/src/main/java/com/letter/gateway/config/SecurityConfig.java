//package com.letter.gateway.config;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
//import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
//import org.springframework.security.config.web.server.ServerHttpSecurity;
//import org.springframework.security.web.server.SecurityWebFilterChain;
//import org.springframework.security.web.server.context.NoOpServerSecurityContextRepository;
//
//@Configuration
//@EnableWebFluxSecurity
//@EnableMethodSecurity(securedEnabled = true, jsr250Enabled = true)
//@RequiredArgsConstructor
//public class SecurityConfig {
//
//    @Bean
//    public SecurityWebFilterChain filterChain(ServerHttpSecurity http) {
//        return http.cors()
//                .and()
//                .csrf()
//                .disable()
//                .httpBasic()
//                .disable()
//                .exceptionHandling()
//                .and()
//                .authorizeExchange()
//                .pathMatchers("/swagger-ui/**").permitAll()
//                .pathMatchers("/webjars/**").permitAll()
//                .pathMatchers("/swagger-ui.index.html/**").permitAll()
//                .pathMatchers("/swagger-ui.html").permitAll()
//                .pathMatchers("/v3/**").permitAll()
//                .pathMatchers("/openapi/**").permitAll()
//                .pathMatchers("/api/members/register").permitAll()
//                .pathMatchers("/api/members/login").permitAll()
//                .pathMatchers("/api/notes/**").authenticated()
//                .anyExchange()
//                .authenticated()
//                .and()
//                .securityContextRepository(NoOpServerSecurityContextRepository.getInstance())
//                .build();
//    }
//}
