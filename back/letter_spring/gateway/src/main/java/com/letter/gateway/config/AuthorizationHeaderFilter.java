package com.letter.gateway.config;

import io.jsonwebtoken.Jwts;
import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.util.Strings;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;
import org.springframework.core.Ordered;

@Slf4j
@Component
public class AuthorizationHeaderFilter extends AbstractGatewayFilterFactory<AuthorizationHeaderFilter.Config> implements Ordered{
    private final Environment environment;

    public AuthorizationHeaderFilter(Environment environment) {
        super(Config.class);
        this.environment = environment;
    }

    @Override
    public GatewayFilter apply(Config config) {
        System.out.println("게이트 웨이 검증 시작 >>>");
        return (exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();

            System.out.println("request " + request);


            // Skip filter for /api/members/login path
            if (request.getURI().getPath().equals("/api/members/login") || request.getURI().getPath().equals("/api/members/register")) {
                System.out.println("통과");
                return chain.filter(exchange);
            }


            if (!request.getHeaders().containsKey(HttpHeaders.AUTHORIZATION))
                return onError(exchange, "No authorization header", HttpStatus.UNAUTHORIZED);
            String authorizationHeader = request.getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
            String jwt = authorizationHeader.replace("Bearer ", "");

            System.out.println("게이트웨이 검증 로직 중간 >>>" + jwt);
            boolean valid = isJwtValid(request, jwt);
            if (!valid) return onError(exchange, "JWT token is not valid", HttpStatus.UNAUTHORIZED);

            return chain.filter(exchange);
        };
    }

    private Mono<Void> onError(ServerWebExchange exchange, String err, HttpStatus httpStatus) {
        System.out.println("게이트웨이 검증 에러 >>>");
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(httpStatus);
        log.error(err);
        return response.setComplete();
    }
    private boolean isJwtValid(ServerHttpRequest request, String jwt) {
        String subject = null;
        try {
            System.out.println("env >>> " + environment.getProperty("secret"));
            subject = Jwts.parser().setSigningKey(environment.getProperty("secret"))
                    .parseClaimsJws(jwt).getBody()
                    .getSubject();

        } catch (Exception e) {
            e.printStackTrace();
        }

        addAuthorizationHeaders(request, subject);
        return !Strings.isBlank(subject);
    }

    // 성공적으로 검증이 되었기 때문에 인증된 헤더로 요청을 변경해준다. 서비스는 해당 헤더에서 아이디를 가져와 사용한다.
    private void addAuthorizationHeaders(ServerHttpRequest request, String email) {
        request.mutate()
                .header("Member-Authorization-Phone", email)
                .build();
    }

    @Override
    public int getOrder() {
        return -1; // 순서를 지정. 낮은 숫자가 더 높은 우선순위를 가짐.
    }

    public static class Config {}
}
