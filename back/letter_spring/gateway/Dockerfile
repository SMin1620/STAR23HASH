FROM openjdk:17-alpine

WORKDIR /usr/src/app

ARG JAR_PATH=./build/libs

COPY ./build/libs/gateway-0.0.1-SNAPSHOT.jar /build/libs/gateway-0.0.1-SNAPSHOT.jar

CMD ["java","-jar","/build/libs/gateway-0.0.1-SNAPSHOT.jar"]