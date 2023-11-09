import styled from 'styled-components'

export const FriendContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const HtmlContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  pointer-events: none;
`

export const BackButton = styled.div`
  position: absolute;
  bottom: 15px;
  left: 17px;
  color: white;
  pointer-events: auto;
  font-size: 18px;
`
