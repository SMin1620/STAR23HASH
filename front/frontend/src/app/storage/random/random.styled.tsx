'use client'

import styled from 'styled-components'

export const RandomPage = styled.div`
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

export const RandomCardContainer = styled.div`
  margin-top: 1rem;

  box-shadow: inset 0px 4px 1px rgba(0, 0, 0, 0.25);
  background-color: rgba(155, 122, 165, 0.8);
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const RandomCardWrapper = styled.div`
  margin: 1rem;
  min-width: 20rem;
`

export const Card = styled.div`
  position: relative;
`

export const CardStateImage = styled(CustomImage)`
  position: absolute;
  top: 0;
  right: 0;
`

export const CardImageWrapper = styled.div`
  border=radius: 0.5rem;
  overflow: hidden;
`

export const CardTitle = styled.h4`
  margin-top: 1rem;
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
