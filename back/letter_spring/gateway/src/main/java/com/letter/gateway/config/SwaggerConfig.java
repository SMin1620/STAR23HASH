package com.letter.gateway.config;



import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springdoc.core.models.GroupedOpenApi;
import org.springdoc.core.properties.SwaggerUiConfigParameters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.gateway.route.RouteDefinition;
import org.springframework.cloud.gateway.route.RouteDefinitionLocator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Primary;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static com.fasterxml.jackson.databind.type.LogicalType.Collection;
import static java.util.stream.Collectors.toList;

//@Configuration
//public class SwaggerConfig {
//
//    // SecuritySecheme 명
//    String jwtSchemeName = "jwtAuth";
//
//    // API 요청헤더에 인증정보 포함
//    SecurityRequirement securityRequirement = new SecurityRequirement().addList(jwtSchemeName);
//
//    // SecuritySchemes 등록
//    Components components = new Components()
//            .addSecuritySchemes(jwtSchemeName, new SecurityScheme()
//                    .name(jwtSchemeName)
//                    .type(SecurityScheme.Type.HTTP) // HTTP 방식
//                    .scheme("bearer")
//                    .bearerFormat("JWT")); // 토큰 형식을 지정하는 임의의 문자(Optional)
//
//    @Bean
//    public OpenAPI swaggerApi() {
//        return new OpenAPI()
//                .components(new Components())
//                .info(new Info()
//                        .title("드릉드릉편지")
//                        .description("드릉드릉편지")
//                        .version("1.0.0"))
//                .addSecurityItem(securityRequirement)
//                .components(components);
//    }
//}


@Configuration
public class SwaggerConfig {

//    String jwtSchemeName = "jwtAuth";
//
//    // API 요청헤더에 인증정보 포함
//    SecurityRequirement securityRequirement = new SecurityRequirement().addList(jwtSchemeName);
//
//    // SecuritySchemes 등록
//    Components components = new Components()
//            .addSecuritySchemes(jwtSchemeName, new SecurityScheme()
//                    .name(jwtSchemeName)
//                    .type(SecurityScheme.Type.HTTP) // HTTP 방식
//                    .scheme("bearer")
//                    .bearerFormat("JWT")); // 토큰 형식을 지정하는 임의의 문자(Optional)

//    @Bean
//    public OpenAPI customOpenAPI() {
//        // JWT 인증 스키마 설정
//        final String securitySchemeName = "bearerAuth";
//        final SecurityScheme securityScheme = new SecurityScheme().type(SecurityScheme.Type.HTTP)
//                .scheme("bearer")
//                .bearerFormat("JWT")
//                .in(SecurityScheme.In.HEADER)
//                .name("Authorization");
//
//        // 모든 API에 인증 정보 적용
//        final SecurityRequirement securityRequirement = new SecurityRequirement().addList(securitySchemeName);
//
//        return new OpenAPI()
//                .components(new Components()
//                        .addSecuritySchemes(securitySchemeName, securityScheme))
//                .info(new Info().title("Sample API").version("v1"))
//                .addSecurityItem(securityRequirement);
//    }


//    @Bean
//    public CommandLineRunner openApiGroups(
//            RouteDefinitionLocator locator,
//            SwaggerUiConfigParameters swaggerUiParameters) {
//        return args -> locator
//                .getRouteDefinitions().collectList().block()
//                .stream()
//                .map(RouteDefinition::getId)
//                .filter(id -> id.matches(".*-service"))
//                .map(id -> id.replace("-service", ""))
//                .forEach(swaggerUiParameters::addGroup);
//    }
//    @Bean
//    @Lazy(false)
//    public List<GroupedOpenApi> apis(RouteDefinitionLocator routeDefinitionLocator) {
//        List<GroupedOpenApi> apis = new ArrayList<>();
//
//        // 게이트웨이에 등록된 라우트를 가져와서 각 라우트에 대한 스웨거 문서를 생성합니다.
//        List<RouteDefinition> definitions = routeDefinitionLocator.getRouteDefinitions().collectList().block();
//        for (RouteDefinition definition : definitions) {
//            // 게이트웨이에 등록된 각 라우트에 대한 스웨거 문서를 생성합니다.
//            GroupedOpenApi.builder()
//                    .group(definition.getId())
//                    .pathsToMatch(definition.getId() + "/**")
//                    .build();
//        }
//
//        return apis;
//    }


    @Bean
    public CommandLineRunner openApiGroups(
            RouteDefinitionLocator locator,
            SwaggerUiConfigParameters swaggerUiParameters) {
        return args -> locator
                .getRouteDefinitions().collectList().block()
                .stream()
                .map(RouteDefinition::getId)
                .filter(id -> id.matches(".*-service"))
                .map(id -> id.replace("-service", ""))
                .forEach(swaggerUiParameters::addGroup);
    }



//    @Bean
//    public GroupedOpenApi getMemberApi() {
//
//        return GroupedOpenApi
//                .builder()
//                .group("members")
//                .pathsToMatch("/api/members/**")
//                .build();
//    }
//
//    @Bean
//    public GroupedOpenApi getLetterApi() {
//
//        return GroupedOpenApi
//                .builder()
//                .group("letters")
//                .pathsToMatch("/api/letters/**")
//                .build();
//    }
//
//    @Bean
//    public OpenAPI getOpenApi() {
//
//        return new OpenAPI().components(new Components())
//                .info(getInfo());
//
//    }
//
//    private Info getInfo() {
//        return new Info()
//                .version("1.0.0")
//                .description("드릉드릉편지")
//                .title("드릉드릉");
//    }
}