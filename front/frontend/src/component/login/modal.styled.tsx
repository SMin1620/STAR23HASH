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

export const CloseButton = styled.button`
  // Add your styles for the close button here.
`
