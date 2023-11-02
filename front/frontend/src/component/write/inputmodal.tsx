'use client'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import * as M from './modal.styled'

enum ContentType {
  '음악',
  '동영상',
  '사진',
}
type Props = {
  contentType: number
  contentUrl: (file: File) => void // contentUrl이 File 객체를 받아들이고 void를 반환하는 함수 타입
  closeState: () => void
}

type AllowedTypes = {
  0: string[]
  1: string[]
  2: string[]
}
const allowedTypes: AllowedTypes = {
  0: ['audio/mpeg', 'audio/wav'], // 음성 파일 허용 확장자
  1: ['video/mp4', 'video/quicktime'], // 동영상 파일 허용 확장자
  2: ['image/jpeg', 'image/png'], // 사진 파일 허용 확장자
}

function InputModal({ contentType, contentUrl, closeState }: Props) {
  const [file, setFile] = useState<File | undefined>()
  const [previewURL, setPreviewURL] = useState<string | undefined>()
  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  if (typeof window === 'undefined') return null

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFile = event.target.files?.[0]

    if (selectedFile) {
      const allowedExtensions = allowedTypes[contentType as keyof AllowedTypes]
      const fileExtension = selectedFile.type

      if (allowedExtensions.includes(fileExtension)) {
        setFile(selectedFile)
        // 파일 미리보기를 위한 URL 생성
        const reader = new FileReader()
        reader.onload = (e) => {
          setPreviewURL(e.target?.result as string)
        }
        reader.readAsDataURL(selectedFile)
        setErrorMessage(undefined) // 오류 메시지 초기화
      } else {
        setErrorMessage('허용되지 않은 파일 유형입니다.')
        setFile(undefined)
      }
    }
  }
  const handleConfirmClick = async () => {
    if (file) {
      contentUrl(file)
    }
  }

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <M.ModalOverlay>
      <M.ModalContent>
        <M.ModalText>{ContentType[contentType]}을 골라주세요!</M.ModalText>
        <M.XButton onClick={closeState}>X</M.XButton>
        <M.FileInput type="file" onChange={handleFileInputChange} />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        {previewURL && file != undefined && (
          <div>
            {file.type.startsWith('image') ? (
              <img src={previewURL} alt="미리보기" />
            ) : (
              <p>파일 이름: {file.name}</p>
            )}
          </div>
        )}
        {!errorMessage && (
          <M.CloseButton onClick={handleConfirmClick}>확인</M.CloseButton>
        )}
      </M.ModalContent>
    </M.ModalOverlay>,
    modalRoot,
  )
}

export default InputModal
