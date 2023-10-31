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
  top: 50%;
  left: 50%;
  width: 280px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 1rem;
  border: 2px solid gray;
`

export const ModalText = styled.div`
  font-size: 16px;
  font-weight: bold;
`

export const ModalInputDiv = styled.div`
  position: relative;
`

export const ModalImg = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  top: -20px;
  left: 200px;
`
export const ModalInput = styled.textarea`
  margin-top: 10px;
  width: 245px;
  height: 80px;
  background-color: #ffe189;
  border-radius: 10px;
  font-size: 13px;
  padding: 1rem;
  line-height: 1.5;
`

export const ModalInputTextLimit = styled.div`
  position: absolute;
  font-size: 9px;
  top: 78px;
  left: 231px;
`
export const CloseButton = styled.button`
  margin-top: 0.5rem;
  width: 245px;
  height: 30px;
  background-color: #947d7e;
  color: white;
  font-size: 13px;
  border-radius: 10px;
`
