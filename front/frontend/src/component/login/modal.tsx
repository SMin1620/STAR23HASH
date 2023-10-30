import React from 'react'
import ReactDOM from 'react-dom'
// import styled from 'styled-components'
// import { ModalOverlay, ModalContent, CloseButton } from './modal.styled'
import * as M from './modal.styled'
interface ModalProps {
  onClose?: () => void // Function that doesn't take or return anything
  message: boolean
}

function Modal({ onClose, message }: ModalProps) {
  if (typeof window === 'undefined') return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null // Return early if no modal root is found

  return ReactDOM.createPortal(
    <M.ModalOverlay>
      <M.ModalContent>
        <div style={{ padding: '20px' }}>잘못된 로그인 정보입니다.</div>
        <div>
          <M.CloseButton onClick={onClose}>Close</M.CloseButton>
        </div>
      </M.ModalContent>
    </M.ModalOverlay>,
    modalRoot,
  )
}

export default Modal
