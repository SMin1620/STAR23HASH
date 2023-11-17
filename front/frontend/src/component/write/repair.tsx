import ReactDOM from 'react-dom'
// import styled from 'styled-components'
// import { ModalOverlay, ModalContent, CloseButton } from './modal.styled'
import * as M from './modal.styled'

function RepairModal({ onConfirm }: { onConfirm: () => void }) {
  if (typeof window === 'undefined') return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null // Return early if no modal root is found

  return ReactDOM.createPortal(
    <M.ModalOverlay>
      <M.ModalContent>
        <M.XButton src="/icons/xicon.png" onClick={onConfirm} />
        <M.RepairImg src="/icons/Preparing.png" />
        <M.ModalText>아직 준비중이에용...</M.ModalText>
      </M.ModalContent>
    </M.ModalOverlay>,
    modalRoot,
  )
}

export default RepairModal
