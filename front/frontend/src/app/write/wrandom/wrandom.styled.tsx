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
  align-items: center;
`

export const InputContent = styled.textarea`
  width: 80%;
  height: 350px;
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

export const Loading = styled.img`
  margin: auto;
  width: 140px;
  height: 140px;
`

export const LoadingText = styled.div`
  font-size: 16px;
  font-weight: bold;
`
