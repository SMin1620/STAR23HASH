'use client'

import styled from 'styled-components'

export const ContentBox = styled.div`
  width: 328px;
  margin-top: 120px;
  text-align: center;
`

export const InputContent = styled.textarea`
  width: 280px;
  height: 300px;
  padding: 10px;

  font-size: 16px;
  font-weight: bold;
  resize: none;
  white-space: pre-wrap;

  background-attachment: local;
  background-image: repeating-linear-gradient(
    white,
    white 34px,
    black 34px,
    black 35px
  );
  line-height: 35px;
  padding: 8px 10px;
`

export const SpaceImg = styled.img`
  margin-left: 80px;
  margin-top: 10px;
  width: 90px;
  height: 90px;
`

export const AddContent = styled.div`
  width: 320px;
  height: 90px;
`
