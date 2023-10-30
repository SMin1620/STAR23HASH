package com.letter.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.config.EnableWebFlux;

@SpringBootApplication
public class GatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}

//	@Bean
//	public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity security) {
//		return security
//				.authorizeExchange()
//				.pathMatchers("/swagger-ui/**").permitAll()
//				.pathMatchers("/webjars/**").permitAll()
//				.pathMatchers("/swagger-ui.index.html/**").permitAll()
//				.pathMatchers("/swagger-ui.html").permitAll()
//				.pathMatchers("/api/members/register").permitAll()
//				.pathMatchers("/api/members/login").permitAll()
//				.pathMatchers("/api/notes/test").permitAll()
//				.anyExchange().authenticated()
//				.and()
//				.csrf().disable()
//				.build();
//	}
}
