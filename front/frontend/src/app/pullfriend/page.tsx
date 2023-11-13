'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import GlobalStyle from '../write/GlobalStyles'
import * as st from './pullfriend.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
import { useRouter, useSearchParams } from 'next/navigation'
import SearchingModal from '@/component/write/searchingmodal'
type Contact = {
  name: string
  phone: string
}

export default function PullFriend() {
  const [showModal, setShowModal] = useState(false)
  const [contact, setContact] = useState('')
  const router = useRouter()

  function openModal() {
    setShowModal(true)
  }

  const handleInputText = (contact: string) => {
    setContact(contact)
    setShowModal(false)
    // 상위 컴포넌트에서 inputText를 처리하는 로직을 추가해주세요.
    if (contact !== '') {
      router.replace(`/write/wfriend/input?phone=${contact}`)
    }
  }

  return (
    <>
      <GlobalStyle />
      <stt.SendBoxDiv className="flex h-screen w-screen items-center justify-center">
        <stt.SendBox className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full">
          <stt.InnerCircle>
            <stt.InnerCircle1></stt.InnerCircle1>
            <stt.InnerCircle2></stt.InnerCircle2>
            <stt.InnerCircle3></stt.InnerCircle3>
          </stt.InnerCircle>
          <st.ContentBox>
            <st.WhoSend>연락처를 가져와야 해요! </st.WhoSend>
            <st.WhoSend>연락처 접근 권한을 허용해주세요 </st.WhoSend>
          </st.ContentBox>
          <stt.EmptyDiv>
            <stt.button onClick={openModal}>조회하기</stt.button>
          </stt.EmptyDiv>
        </stt.SendBox>
      </stt.SendBoxDiv>
      {showModal && (
        <SearchingModal contact={contact} closeState={handleInputText} />
      )}
    </>
  )
}
