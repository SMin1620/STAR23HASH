'use client'

import styled from 'styled-components'

export const HistoryPage = styled.div`
  display: flex;
  flex-direction: column;
`

export const BackBtnWrapper = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`

export const CustomImage = styled.img``

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: white;
`

export const LetterLogContainer = styled.div`
  width: 100%;

  box-shadow: inset 0px 4px 1px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const LetterLogWrapper = styled.ul`
  padding-top: 1.5rem;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
`

export const LetterHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const LetterFormat = styled.li`
  position: relative;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
`
export const LetterReceived = styled(LetterFormat)`
  background-image: url('/icons/RandomLetterBG.svg');
`
export const LetterSent = styled(LetterFormat)`
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
export const IsNewLetterImage = styled(CustomImage)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`
