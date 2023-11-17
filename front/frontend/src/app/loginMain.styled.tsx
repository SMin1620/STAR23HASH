import styled from 'styled-components'

export const inputStyle = styled.input`
  width: 240px;
  height: 45px;
  margin-bottom: 8px;
  border-radius: 10px;
  opacity: 0.8;
  text-align: center;
  background-color: rgb(203 213 225);
  font-size: 15pt;
`

export const Button = styled.div`
  background-color: #ffe189;
  border-radius: 10px;
  color: black;
  width: 120px;
  height: 45px;
  text-align: center;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17pt;
`
export const ContentBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 20;
`
export const AstronauntDiv = styled.div`
  width: 300px;
  height: 300px;
`

export const ErrorBoard = styled.div`
  // background-image: url('/icons/SolarSystem.png');
  // background-repeat: no-repeat;

  // display: flex;
  // place-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);

  min-height: 20rem;
  max-width: 500px;
  border-radius: 0.625rem;
  // padding: 1rem;
  // padding-left: 2rem;
  // padding-right: 2rem;
  padding-bottom: 1rem;
`
export const CustomImage = styled.img``

export const ErrorTitle = styled.h1`
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 4rem;
  color: #ff5437;
  margin-top: 1rem;
  // font-weight: bold;
`
export const ErrorContent = styled.p`
  padding-left: 2rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  color: #5e5e5e;
`

export const ErrorCode = styled.p`
  padding-left: 2rem;
  padding-right: 1rem;
  font-size: 1rem;
  color: #5e5e5e;
`

export const ReturnButton = styled.button`
  margin-top: auto;
  margin-left: auto;
  margin-right: 1rem;
  background-color: #ff9887;
  border-radius: 1.25rem;

  width: 5.5rem;
  height: 2rem;

  color: white;
`
