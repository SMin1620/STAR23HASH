'use client'

import styled from 'styled-components'

export const TestText = styled.div`
  margin: 1rem;
  color: #747474;
`

export const NavigationBox = styled.div`
  width: 8rem;
  height: 8rem;
  position: relative;

  &:active {
    background-color: rgba(178, 178, 178, 0.581) !important;
  }
`
export const FriendNavBox = styled(NavigationBox)`
  background-image: url('/icons/FriendStorageBtn.svg');
  background-repeat: no-repeat;
`
export const RandomNavBox = styled(NavigationBox)`
  background-image: url('/icons/RandomStorageBtn.svg');
  background-repeat: no-repeat;
`

export const NavigationTitle = styled.h1`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
`

export const FriendTitle = styled(NavigationTitle)`
  top: 1.7rem;
  left: 3rem;
`
export const RandomTitle = styled(NavigationTitle)`
  top: 2.3rem;
  left: 3rem;
`
