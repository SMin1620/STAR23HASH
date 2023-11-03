'use client'

import styled from 'styled-components'

export const SpaceImg = styled.img`
  margin-left: 70%;
  margin-top: 20px;
  width: 90px;
  height: 90px;
`

export const ContentBox = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
`

export const InputContent = styled.textarea`
  width: 80%;
  height: 250px;
  padding: 10px;

  font-size: 16px;
  resize: none;
  white-space: pre-wrap;

  background-attachment: local;
  background-image: repeating-linear-gradient(
    white,
    white 34px,
    lightgray 34px,
    lightgray 35px
  );
  line-height: 35px;
  padding: 8px 10px;
  outline: none;
`

export const Hint = styled.label`
  margin-top: 5%;
  margin-bottom: 10px;
  margin-left: 10%;
  display: flex;
  align-items: center;
`

export const HintCheck = styled.input`
  display: none;
  &:checked + span::before {
    content: '✔'; // 체크 마크
    display: block;
  }
`

export const HintCheckCustom = styled.span`
  position: relative;
  width: 16px; // 체크박스 크기
  height: 16px; // 체크박스 크기
  border-radius: 1px; // 체크박스 모서리 둥글게
  background-color: #d9d9d9;
  margin-right: 8px; // 체크박스와 레이블 사이의 여백
  font-size: 12px; // 체크 마크 크기
  text-align: center;
  line-height: 1.3;
  user-select: none;
`

export const AddContent = styled.div`
  margin-bottom: 30px;
  margin-left: 10%;
  margin-right: 10%;
  height: 135px;
  padding-top: 15px;
  justify-content: center;
  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffe189;
  border-radius: 15px;
  box-shadow:
    3px 3px 5px rgba(0, 0, 0, 0.1),
    -3px 3px 5px rgba(0, 0, 0, 0.2);
`

export const ContentInfoText = styled.div`
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Medias = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Media = styled.img`
  width: 60px;
  height: 60px;
  background-color: white;
  margin-top: 10px;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 10px;

  box-shadow:
    3px 3px 5px rgba(0, 0, 0, 0.1),
    -3px 3px 5px rgba(0, 0, 0, 0.2);
`

export const Loading = styled.img`
  margin: auto;
  width: 140px;
  height: 140px;
`

export const LoadingText = styled.div`
  font-size: 16px;
  font-weight: bold;
`
