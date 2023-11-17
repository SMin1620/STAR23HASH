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
  const [contentLength, setContentLength] = useState(0)

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value
    setInputText(inputValue)
    if (inputText.length >= 50) {
      // alert('내용은 300자 이내로 작성해주세요.')
      setInputText(inputValue.substring(0, 49))
    }
    setContentLength(inputValue.length)
  }

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
            onChange={handleContentChange}
          ></M.ModalInput>
          <M.ContentLimit
            className={contentLength >= 50 ? `text-red-500` : `text-gray-400`}
          >
            {contentLength}/50
          </M.ContentLimit>
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
