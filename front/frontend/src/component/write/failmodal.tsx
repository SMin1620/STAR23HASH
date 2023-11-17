import ReactDOM from 'react-dom'
// import styled from 'styled-components'
// import { ModalOverlay, ModalContent, CloseButton } from './modal.styled'
import * as M from './modal.styled'

function Modal({ onConfirm }: { onConfirm: () => void }) {
  if (typeof window === 'undefined') return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null // Return early if no modal root is found

  return ReactDOM.createPortal(
    <M.ModalOverlay>
      <M.ModalContent>
        <M.ModalText>오늘은 이미 편지를 보냈어요</M.ModalText>
        <M.ModalText>내일 다시 보내주세요!</M.ModalText>
        <M.CloseButton2 onClick={onConfirm}>확인</M.CloseButton2>
      </M.ModalContent>
    </M.ModalOverlay>,
    modalRoot,
  )
}

export default Modal
