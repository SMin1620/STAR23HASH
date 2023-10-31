'use client'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// import styled from 'styled-components'
// import { ModalOverlay, ModalContent, CloseButton } from './modal.styled'
import * as M from './modal.styled'

function Modal({ onConfirm }: { onConfirm: (text: string) => void }) {
  const [inputText, setInputText] = useState('') // State to store input text

  if (typeof window === 'undefined') return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null // Return early if no modal root is found

  return ReactDOM.createPortal(
    <M.ModalOverlay>
      <M.ModalContent>
        <M.ModalText>어떤 힌트를 주고싶어요?</M.ModalText>
        <M.ModalInputDiv>
          <M.ModalImg src="/write/Planet-2.svg" alt="ModalImg" />
          <M.ModalInput
            value={inputText}
            placeholder="힌트를 적어주세요'v'"
            onChange={(e) => setInputText(e.target.value)}
          ></M.ModalInput>
          {/* <M.ModalInputTextLimit>/50</M.ModalInputTextLimit> */}
        </M.ModalInputDiv>
        <M.CloseButton onClick={() => onConfirm(inputText)}>확인</M.CloseButton>
      </M.ModalContent>
    </M.ModalOverlay>,
    modalRoot,
  )
}

export default Modal
