'use client'

import styled from 'styled-components'

export const ContentBox = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  text-align: center;
`
export const ContactBox = styled.div`
  margin-top: 70px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: auto;
  height: 35rem;
  overflow: auto;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  box-shadow: inset 0px 4px 1px rgba(0, 0, 0, 0.25);
`

export const ContactObject = styled.div<{ $isSelected: boolean }>`
  height: 4rem;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid lightgray;
  background-color: ${(props) => (props.$isSelected ? 'lightgray' : 'white')};
`

export const ContactName = styled.div`
  padding-top: 10px;
  margin-bottom: 7px;
  margin-left: 10px;
  font-size: 1.5rem;
`

export const ContactPhone = styled.div`
  margin-left: 15px;
  font-size: 0.8rem;
  color: gray;
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
