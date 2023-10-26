'use client'

import FriendBtn from '@/component/icons/FriendStorageBtn.svg'
import RandonBtn from '@/component/icons/RandomStorageBtn.svg'
import styled from 'styled-components'



export const TestText = styled.div`
    margin:1rem;
    color:#747474;
`

export const NavigationBox = styled.div`
    width:8rem;
    height:8rem;
    position:relative;

`

export const NavigationTitle = styled.h1`
position:absolute;
font-size:1rem;
font-weight:bold;
`

export const FriendTitle = styled(NavigationTitle)`
top:1.7rem;
left:3rem;

`
export const RandomTitle = styled(NavigationTitle)`

top:3.3rem;
left:3rem;
`