import styled from 'styled-components'

export const SendBoxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const SendBox = styled.div`
  min-width: 20rem;
  height: 30rem;
  max-width: 45rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
export const AstronautContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const AstronautImages = styled.div`
  margin-top: 90px;
  display: flex;
`
export const AstronautBox = styled.div`
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border: 2px solid #3e3d83;
  }
  &:active {
    border: 2px solid #3e3d83;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`

export const Btn = styled.button`
  background-color: #3e3d83;
  border-radius: 20px;
  color: white;
  width: 80px;
  height: 35px;
  margin: 0 7px;
`
export const Content = styled.div`
  width: 80%;
  height: 250px;
  padding: 10px;

  font-size: 16px;
  resize: none;
  white-space: pre-wrap;

  background-attachment: local;
  background-image: repeating-linear-gradient(
    white,
    white 34px,
    lightgray 34px,
    lightgray 36px
  );
  line-height: 36px;
  padding: 8px 10px;
  outline: none;
`
export const ContentBox = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const GuideBox = styled.div`
  bottom: 10%;
  color: white;
  text-align: center;
  position: absolute;
  font-size: 20px;
`
