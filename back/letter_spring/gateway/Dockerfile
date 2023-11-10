FROM openjdk:17-alpine

WORKDIR /usr/src/app

ARG JAR_PATH=./build/libs

COPY ./build/libs/gateway-0.0.1-SNAPSHOT.jar /build/libs/gateway-0.0.1-SNAPSHOT.jar

CMD ["java","-jar","/build/libs/gateway-0.0.1-SNAPSHOT.jar"]

ENTRYPOINT ["java", \
"-javaagent:./elastic-apm-agent-1.36.0.jar", \
"-Delastic.apm.server_urls=http://k9e106a.p.ssafy.io:8200", \
"-Delastic.apm.service_name=boot-apm-agent", \
"-Delastic.apm.application_packages=com.example", \
"-Delastic.apm.environment=dev", \
"-Dspring.profiles.active=dev", \
"-jar", \
"/build/libs/gateway-0.0.1-SNAPSHOT.jar"]