package com.letter.authservice.exception;

import lombok.Getter;

public enum ExceptionCode {

    // Member
    PHONE_ALREADY_EXISTS(409, "Phone Already Exists"),
    MEMBER_ALREADY_WRITE(409, "Member Already Write"),
    INVALID_REFRESH_TOKEN(400,"Invalid Refresh Token"),
    INVALID_ACCESS_TOKEN(401,"Invalid Access Token"),
    FAILED_CREATE_ACCESS_TOKEN(500, "Failed Create Access Token"),
    FAILED_CREATE_REFRESH_TOKEN(500, "Failed Create Access Token"),
    MEMBER_NOT_FOUND(404, "Member Not Found"),

    // ROLL PAPER
    ROLL_NOT_FOUND(404, "Roll Not Found"),
    PAPER_NOT_FOUND(404, "Paper Not Found"),


    FAILED_TO_UPDATE_MEMBER(500, "Failed Update Member"),
    FAILED_TO_DELETE_MEMBER(500, "Failed Delete Member"),
    FAILED_TO_UPDATE_FILE(500, "Failed Update File"),
    WRONG_PASSWORD(400,"Wrong Password"),
    NOT_ALLOWED_FILES(405,"Cannot upload Multi Image File"),
    NOT_AUTHORIZED_USER(403,"Not Authorized User"),
    UNACCEPTABLE_EXTENSION(403,"Unacceptable Extension"),
    EMAIL_ALREADY_EXISTS(409, "Email Already Exists"),
    FILE_NOT_FOUND(404, "File Not Found"),
    LIKE_NOT_FOUND(404, "Like Not Found"),
    NOT_OWNER_OF(409,"Not owner of item"),
    DIARY_NOT_FOUND(404, "Diary Not Found");


    @Getter
    private final int status;

    @Getter
    private final String message;

    ExceptionCode(int code, String message){
        this.status = code;
        this.message = message;
    }

}
