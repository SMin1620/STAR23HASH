'use client'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import * as M from './modal.styled'

type Props = {
  hint: string
  closeState: (text: string) => void
}

function Modal({ hint, closeState }: Props) {
  const [inputText, setInputText] = useState(hint) // State to store input text

  if (typeof window === 'undefined') return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null // Return early if no modal root is found

  return ReactDOM.createPortal(
    <M.ModalOverlay>
      <M.ModalContent>
        <M.ModalText>어떤 힌트를 주고싶어요?</M.ModalText>
        <M.ModalInputDiv>
          <M.ModalImg src="/write/Planet-2.png" alt="ModalImg" />
          <M.ModalInput
            value={inputText}
            placeholder="힌트를 적어주세요'v'"
            onChange={(e) => setInputText(e.target.value)}
          ></M.ModalInput>
          {/* <M.ModalInputTextLimit>/50</M.ModalInputTextLimit> */}
        </M.ModalInputDiv>
        <M.CloseButton onClick={() => closeState(inputText)}>
          확인
        </M.CloseButton>
      </M.ModalContent>
    </M.ModalOverlay>,
    modalRoot,
  )
}

export default Modal
