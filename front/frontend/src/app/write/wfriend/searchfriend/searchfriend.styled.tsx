'use client'

import styled from 'styled-components'

export const ContentBox = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  text-align: center;
`

export const WhoSend = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const SendObject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const SendImg = styled.img`
  width: 150px;
  height: 150px;
`

export const SendText = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
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

export const possible = styled.div`
  font-size: 0.8rem;
  color: blue;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
`
export const impossible = styled.div`
  font-size: 0.8rem;
  color: red;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
`

export const EmptyDiv = styled.div``

export const ModalPhone = styled.input`
  width: 160px;
  height: 30px;
  text-align: center;
  border-bottom: 2px dashed black;
  font-size: 1rem;

  &:focus {
    outline: none; /* 기본 포커스 아웃라인 제거 */
    border-bottom: 2px dashed black;
  }
`

export const SearchButton = styled.button`
  width: 50px;
  height: 30px;
  background-color: #ffe189;
  font-size: 16px;
  border-radius: 10px;
`
