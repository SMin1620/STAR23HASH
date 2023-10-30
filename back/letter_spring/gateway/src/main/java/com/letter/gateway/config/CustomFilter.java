//package com.letter.gateway.config;
//
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.cloud.gateway.filter.GatewayFilter;
//import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
//import org.springframework.http.server.reactive.ServerHttpRequest;
//import org.springframework.http.server.reactive.ServerHttpResponse;
//import org.springframework.stereotype.Component;
//import reactor.core.publisher.Mono;
//
//@Slf4j
//@Component
//public class CustomFilter extends AbstractGatewayFilterFactory<CustomFilter.Config> {
//    public CustomFilter() {
//        super(Config.class);
//    }
//    @Override
//    public GatewayFilter apply(Config config) {
//        return (exchange, chain) -> {
//            // Pre process start ====================================================
//            ServerHttpRequest request = exchange.getRequest();
//            ServerHttpResponse response = exchange.getResponse();
//            log.info("Custom pre process filter: request uri -> {}", request.getId());
//            // Pre process end =======================================================
//            // Post process start =======================================================
//            return chain.filter(exchange).then(Mono.fromRunnable(() -> {
//                log.info("Custom post process filter: response code -> {}", response.getStatusCode());
//            }));
//            // Post process end =======================================================
//        };
//    }
//    public static class Config {
//        // Put the configuration properties
//    }
//}
