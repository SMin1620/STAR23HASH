'use client'
import Link from 'next/link'
import GlobalStyle from '../../GlobalStyles'
import * as st from './pullfriend.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
import { pullContacts } from '@/app/utils/write/pullContacts'
import { useRouter, useSearchParams } from 'next/navigation'
type Contact = {
  name: string
  phone: string
}

export default function WriteFriend() {
  const router = useRouter()

  const contacts: Contact[] = [
    { name: '김은정0', phone: '1234' },
    { name: '이은정1', phone: '12345' },
    { name: '박은정2', phone: '01012341234' },
    { name: '최은정3', phone: '01012341234' },
    { name: '조은정4', phone: '01012341234' },
    { name: '권은정5', phone: '01012341234' },
    { name: '조은정6', phone: '01012341234' },
    { name: '조은정7', phone: '01012341234' },
    { name: '조은정8', phone: '01012341234' },
    { name: '조은정9', phone: '01012341234' },
    { name: '조은정10', phone: '01012341234' },
    { name: '조은정11', phone: '01012341234' },
    { name: '조은정12', phone: '01012341234' },
    { name: '조은정13', phone: '01012341234' },
    { name: '조은정14', phone: '01012341234' },
  ]
  const handleSendClick = async () => {
    await pullContacts(contacts)
    router.replace(`/write/wfriend/getfriend`)
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
            <stt.button onClick={handleSendClick}>전송</stt.button>
          </stt.EmptyDiv>
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
