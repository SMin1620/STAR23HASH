import styled from 'styled-components'

export const LinkContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const LinkButton = styled.button`
  background-color: #3e3d83;
  position: absolute;
  width: 100px;
  height: 50px;
  bottom: 70px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 20px;
  color: white;
  font-size: 21px;
  box-shadow: 3px 3px #545454;
  pointer-events: auto;
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
