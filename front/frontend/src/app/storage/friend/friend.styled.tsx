'use client'

import styled from 'styled-components'

export const FriendPage = styled.div`
  display: flex;
  flex-direction: column;
`
export const BackBtnWrapper = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`

export const CustomImage = styled.img``

export const CalenderButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;

  position: relative;
`
export const Calender = styled.p`
  position: absolute;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: white;
`

export const DateContainer = styled.span`
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  color: white;
`

export const LetterItemContainer = styled.div`
  width: 100%;

  box-shadow: inset 0px 4px 1px rgba(0, 0, 0, 0.25);
  background-color: rgba(155, 122, 165, 0.8);
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const LetterItemWrapper = styled.div`
  display: grid;
  margin: 2rem;
`
export const Item = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;
`
