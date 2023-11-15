'use client'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import * as M from './modal.styled'
import { loginAxios } from '@/app/utils/loginAxios'
import { useRouter } from 'next/navigation'

type Props = {
  contact: string
  closeState: (contact: string) => void
}

function SearchingModal({ contact, closeState }: Props) {
  const router = useRouter()

  const [phone, setPhone] = useState('') // State to store input text
  const [result, setResult] = useState(false)
  const [resultMessage, setResultMessage] = useState('')

  const Search = async () => {
    const isNumeric = /^[0-9]*$/.test(phone)
    const numberlength = phone.length === 11
    if (!isNumeric) {
      setResultMessage('숫자만 입력해주세요')
      setResult(false)
      return
    } else if (!numberlength) {
      setResultMessage('전화번호를 정확하게 입력해주세요 (11자)')
      setResult(false)
      return
    } else {
      try {
        const res = await loginAxios(phone)
        if (res.data.toString() === 'true') {
          setResultMessage('전송할 수 있어요!')
          setResult(true)
        } else {
          setResultMessage('상대방이 서비스를 이용하고 있지 않아요⊙﹏⊙∥')
          setResult(false)
        }
      } catch (error) {
        router.push('/error')
      }
    }
  }

  const Confirm = () => {
    if (result) {
      closeState(phone)
    } else {
      alert('연락처를 확인해주세요..!')
    }
  }
  if (typeof window === 'undefined') return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null // Return early if no modal root is found

  return ReactDOM.createPortal(
    <M.ModalOverlay>
      <M.ModalContent2>
        <M.XButton src="/icons/xicon.png" onClick={() => closeState('')} />
        <M.ModalText>편지를 보낼 수 있는지</M.ModalText>
        <M.ModalText>확인해보세요!</M.ModalText>

        <M.EmptyDiv className="flex flex-col">
          <M.EmptyDiv>
            <M.ModalPhone
              value={phone}
              placeholder="연락처를 조회해보세요'v'"
              onChange={(e) => setPhone(e.target.value)}
            ></M.ModalPhone>
            <M.SearchButton onClick={Search}>조회</M.SearchButton>
          </M.EmptyDiv>
          {result ? (
            <M.possible>{resultMessage}</M.possible>
          ) : (
            <M.impossible>{resultMessage}</M.impossible>
          )}
        </M.EmptyDiv>
        <M.EmptyDiv>
          <M.CloseButton2 onClick={Confirm}>확인</M.CloseButton2>
        </M.EmptyDiv>
      </M.ModalContent2>
    </M.ModalOverlay>,
    modalRoot,
  )
}

export default SearchingModal
