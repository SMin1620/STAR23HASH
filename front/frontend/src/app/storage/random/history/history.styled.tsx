'use client'

import styled from 'styled-components'

export const TestDiv = styled.div`
  color: red;
`

export const BackBtnWrapper = styled.div``

export const CustonImage = styled.img``

export const RandomMainTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LetterLogWrapper = styled.div`
  box-shadow: inset 0px 4px 1px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const LetterName = styled.h1`
  color: #111827;
  font-size: 1rem;
  font-weight: bold;
`
export const LetterDate = styled.p`
  color: #696969;
  font-size: 0.7rem;
`
export const LetterContent = styled.span`
  margin-top: 0.5rem;
`
export const LetterReceived = styled.li`
  background-image: url('/icons/RandomLetterBG.svg');
`
export const LetterSent = styled.li`
position: relative;
background-image: url('/icons/RandomLetterBG.svg'); 
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13, 124, 255, 0.2); 
  border-radius: 10px; 
  
`
