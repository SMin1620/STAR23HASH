import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import * as M from './modal.styled'

interface ModalProps {
  onClose?: () => void
  message: boolean
}

function Modal({ onClose, message }: ModalProps) {
  if (typeof window === 'undefined') return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <M.ModalOverlay>
      <M.ModalContent>
        {message ? (
          <></>
        ) : (
          <div>
            <M.content className="text-center">
              <div>등록된 계정이 없어요</div>
              <div>가입하시겠습니까?</div>
            </M.content>
            <div className="flex" style={{ justifyContent: 'space-between' }}>
              <Link href="/auth/regist">
                <M.yesButton>넹</M.yesButton>
              </Link>
              <M.noButton onClick={onClose}>아니용</M.noButton>
            </div>
          </div>
        )}
      </M.ModalContent>
    </M.ModalOverlay>,
    modalRoot,
  )
}

export default Modal
