import styled from 'styled-components'

export const SendBoxDiv = styled.div`
  background-color: #c5e7ac;
`
export const SendBox = styled.div`
  min-width: 18rem;
  height: 35rem;
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
  &.active {
    border: 2px solid #3e3d83;
  }
`

export const AstronautImg = styled.img`
  width: 70px;
  height: 70px;
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
