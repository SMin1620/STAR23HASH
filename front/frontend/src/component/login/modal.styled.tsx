// modal.styled.tsx

import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled.div`
  z-index: 20;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 200px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: '1em';
  borderradius: '.5em';
`

export const content = styled.div`
  font-size: 15pt;
  padding: 5px;
  margin-bottom: 30px;
`

export const yesButton = styled.div`
  background-color: #ffe189;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 40px;
  border-radius: 10px;
  margin-right: 30px;
`

export const noButton = styled.button`
  background-color: #ffe189;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 40px;
  border-radius: 10px;
`
