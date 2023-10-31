'use client'

import styled from 'styled-components'

//back botton
export const BackBtnWrapper = styled.button`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  width: 2.75rem;
  height: 2.75rem;
`
export const CustomImage = styled.img``

// planet card
export const Card = styled.button`
  position: relative;
`

export const CardStateImage = styled(CustomImage)`
  position: absolute;
  top: 0;
  right: 0;
`

export const CardImageWrapper = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardTitle = styled.h4`
  //   margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: white;
`

export const CardUpdateDate = styled.p`
  font-size: 0.875rem;

  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
`

// letter
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
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`

// LetterItem

export const Item = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;
`
