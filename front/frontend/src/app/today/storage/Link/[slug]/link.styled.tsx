import styled from 'styled-components'

export const LinkContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const LinkButton = styled.button`
  background-color: #4e2c0e;
  position: absolute;
  width: 90px;
  height: 38px;
  bottom: 120px;
  border-radius: 20px;
  color: white;
  font-size: 17px;
  box-shadow: 0px 6px 5px -2px #545454;
  margin-right: 100px;

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
  bottom: 20px;
  left: 20px;
  color: white;
  pointer-events: auto;
  font-size: 22px;
  font-weight: 500;
`
export const Guide = styled.div`
  position: absolute;
  color: white;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  font-size: 18px;
`

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`
