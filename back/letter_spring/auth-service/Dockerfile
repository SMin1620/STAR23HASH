FROM openjdk:17-alpine

WORKDIR /usr/src/app

ARG JAR_PATH=./build/libs

# Add this line to copy the Elastic APM agent JAR file
COPY ./elastic-apm-agent-1.36.0.jar ./elastic-apm-agent-1.36.0.jar
COPY ./build/libs/auth-service-0.0.1-SNAPSHOT.jar /build/libs/auth-service-0.0.1-SNAPSHOT.jar

CMD ["java","-jar","/build/libs/auth-service-0.0.1-SNAPSHOT.jar"]

ENTRYPOINT ["java", \
"-javaagent:./elastic-apm-agent-1.36.0.jar", \
"-Delastic.apm.server_urls=http://k9e106a.p.ssafy.io:8200", \
"-Delastic.apm.service_name=auth-service", \
"-Delastic.apm.application_packages=com.letter", \
"-Delastic.apm.environment=dev", \
"-Dspring.profiles.active=dev", \
"-jar", \
"/build/libs/auth-service-0.0.1-SNAPSHOT.jar"]