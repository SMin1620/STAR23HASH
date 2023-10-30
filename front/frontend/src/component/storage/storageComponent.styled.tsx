'use client'

import styled from 'styled-components'

export const BackBtnWrapper = styled.button`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  width: 2.75rem;
  height: 2.75rem;
`
export const CustomImage = styled.img``

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
