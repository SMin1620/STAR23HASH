'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import GlobalStyle from './GlobalStyles'
import * as st from './write.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
import Modal from '@/component/write/failmodal'
import { checkNote } from '@/app/utils/write/checkNote'
export default function Write() {
  const [res, setRes] = useState(true)
  const router = useRouter()
  const handleRandom = async () => {
    const result = await checkNote()
    if (result.status.toString() === '200') {
      setRes(true)
      router.push(`/write/wrandom`)
    } else {
      setRes(false)
    }
  }
  const closeModal = () => {
    setRes(!res)
  }
  useEffect(() => {}, [res])
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
            <st.WhoSend>누구에게 편지를 보낼까요?</st.WhoSend>
            <st.SendObject>
              <Link href={'/write/wfriend/pullfriend'}>
                <st.SendImg
                  src="/write/Solar System.svg"
                  alt="친구에게 보내기"
                ></st.SendImg>
                <st.SendText>친구</st.SendText>
              </Link>
              <button onClick={handleRandom}>
                <st.SendImg src="/write/Rocket-2.svg" alt="랜덤친구 사귀기" />
                <st.SendText>랜덤</st.SendText>
              </button>
            </st.SendObject>
          </st.ContentBox>
        </stt.SendBox>
      </stt.SendBoxDiv>
      {!res && <Modal onConfirm={closeModal} />}
    </>
  )
}
