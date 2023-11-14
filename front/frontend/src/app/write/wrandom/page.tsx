'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import GlobalStyle from '../GlobalStyles'
import { createNote } from '@/app/utils/write/createNote'
import * as st from './wrandom.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
export default function WriteFriend() {
  const [content, setContent] = useState('')
  const router = useRouter()
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value
    setContent(inputValue)
  }

  const handleSend = async () => {
    // const reset = await createNotereset() //쪽지보낸거 리셋
    if (content === '') {
      alert('내용을 입력해 주세요!')
    } else {
      try {
        const res = await createNote(content)
        if (res.status.toString() === 'CREATED') {
          router.replace(`/write/send?isSuccess=true`)
        } else {
          throw new Error('에러')
        }
      } catch (error) {
        router.replace(`/write/send?isSuccess=false`)
      }
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
          <st.SpaceImg src="/write/Rocket-2.png" alt="Solar System" />

          <st.ContentBox>
            <st.InputContent
              placeholder="내용을 입력하세요"
              value={content}
              onChange={handleContentChange}
            ></st.InputContent>
          </st.ContentBox>
          <stt.EmptyDiv>
            <stt.button onClick={handleSend}>전송</stt.button>
          </stt.EmptyDiv>
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
