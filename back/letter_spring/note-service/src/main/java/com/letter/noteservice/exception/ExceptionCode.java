package com.letter.noteservice.exception;

import lombok.Getter;

public enum ExceptionCode {

    // Member
    PHONE_ALREADY_EXISTS(409, "Phone Already Exists"),
    INVALID_REFRESH_TOKEN(400,"Invalid Refresh Token"),
    INVALID_ACCESS_TOKEN(401,"Invalid Access Token"),
    FAILED_CREATE_ACCESS_TOKEN(500, "Failed Create Access Token"),
    FAILED_CREATE_REFRESH_TOKEN(500, "Failed Create Access Token"),
    EXPIRED_TIME_TOKEN(401,"Invalid Access Token"),
    MEMBER_UNAUTHORIZED(403,"Member Unauthorized"),
    EMAIL_NOT_FOUND(404, "Email Not Found"),
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    SELLER_NOT_FOUND(404, "Seller Not Found"),
    BUYER_NOT_FOUND(404, "Buyer Not Found"),
    COIN_LACK(409, "Coin Lack"),
    EMOTION_NOT_FOUND(404, "Emotion Not Found"),

    /**
     * Note and Room
     */
    ROOM_ALREADY_EXISTS(409, "Room Already Exists"),


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
