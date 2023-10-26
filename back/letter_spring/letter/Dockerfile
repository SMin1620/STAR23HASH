#환경
FROM amazoncorretto:17
#변수설정
ARG JAR_FILE=build/libs/letter-0.0.1-SNAPSHOT.jar
#복사
COPY ${JAR_FILE} diagram.jar
#Port번호
EXPOSE 8080
#서버 명령어
ENTRYPOINT ["java", "-jar", "/diagram.jar"]