'use client'

import styled from 'styled-components'

export const Clock = styled.h1`
  font-family: 'DoveMayoTTFGothic', sans-serif;

  color: white;
  font-size: 4rem;
  font-weight: bold;
  margin-top: 20%;
  margin-bottom: 60%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`

export const TestText = styled.div`
  font-family: 'Dovemayo_gothic', sans-serif;

  margin: 1rem;
  color: #747474;
`

export const NavigationBox = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;

  display: flex;
  justify-content: center;

  &:active {
    background-color: rgba(178, 178, 178, 0.581) !important;
  }
`
export const FriendNavBox = styled(NavigationBox)`
  background-image: url('/icons/FriendStorageBtn.svg');
  background-repeat: no-repeat;
  margin-right: auto;
  margin-left: 25%;
`
export const RandomNavBox = styled(NavigationBox)`
  background-image: url('/icons/RandomStorageBtn.svg');
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: 15%;
`

export const NavigationTitle = styled.h1`
  font-family: 'Dovemayo_gothic', sans-serif, Arial;

  position: absolute;
  font-size: 1.5rem;
`

export const FriendTitle = styled(NavigationTitle)`
  top: 20%;
`
export const RandomTitle = styled(NavigationTitle)`
  top: 30%;
`

export const TestBoard = styled.div`
  position: relative;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);

  min-height: 20rem;

  border-radius: 0.625rem;
  padding: 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
