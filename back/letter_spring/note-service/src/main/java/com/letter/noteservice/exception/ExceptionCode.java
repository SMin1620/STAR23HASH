package com.letter.noteservice.exception;

import lombok.Getter;

public enum ExceptionCode {

    // Member
    MEMBER_ALREADY_WRITE(409, "Member Already Write"),

    /**
     * Note and Room
     */
    ROOM_ALREADY_EXISTS(409, "Room Already Exists"),
    ROOM_NOT_FOUND(404, "Room Not Found"),
    NOTE_NOT_FOUND(404, "Note Not Found"),
    NOTE_ALREADY_REPLY(409, "Note Already Reply"),


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
