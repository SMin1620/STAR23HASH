'use client'
import { useState } from 'react'
import Link from 'next/link'
import GlobalStyle from '../../GlobalStyles'
import * as st from './getfriend.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
import { useRouter } from 'next/navigation'

type Contact = {
  이름: string
  연락처: string
}

export default function WriteFriend() {
  const [phone, setPhone] = useState('')
  const [selectedContactIndex, setSelectedContactIndex] = useState(0)

  const router = useRouter()
  const contacts: Contact[] = [
    { 이름: '조은정0', 연락처: '01012341234' },
    { 이름: '조은정1', 연락처: '01012341234' },
    { 이름: '조은정2', 연락처: '01012341234' },
    { 이름: '조은정3', 연락처: '01012341234' },
    { 이름: '조은정4', 연락처: '01012341234' },
    { 이름: '조은정5', 연락처: '01012341234' },
    { 이름: '조은정6', 연락처: '01012341234' },
    { 이름: '조은정7', 연락처: '01012341234' },
    { 이름: '조은정8', 연락처: '01012341234' },
    { 이름: '조은정9', 연락처: '01012341234' },
    { 이름: '조은정10', 연락처: '01012341234' },
    { 이름: '조은정11', 연락처: '01012341234' },
    { 이름: '조은정12', 연락처: '01012341234' },
    { 이름: '조은정13', 연락처: '01012341234' },
    { 이름: '조은정14', 연락처: '01012341234' },
  ]

  const selectContact = (index: number) => {
    console.log(contacts[index].이름, contacts[index].연락처)
    setPhone(contacts[index].연락처)
    setSelectedContactIndex(index)
  }

  const handleSendClick = async () => {
    if (phone === '') {
      alert('보낼 사람을 선택해주세요!')
    } else {
      router.push(`/write/wfriend/input?phone=${phone}`)
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

          <st.ContactBox>
            {contacts.map((contact, index) => (
              <st.ContactObject
                key={index}
                onClick={() => selectContact(index)}
                isSelected={selectedContactIndex === index}
              >
                <st.ContactName>{contact.이름}</st.ContactName>
                <st.ContactPhone>전화번호 : {contact.연락처}</st.ContactPhone>
              </st.ContactObject>
            ))}
          </st.ContactBox>

          <stt.EmptyDiv>
            <stt.button onClick={handleSendClick}>편지쓰기</stt.button>
          </stt.EmptyDiv>
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
