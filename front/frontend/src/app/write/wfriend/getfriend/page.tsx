'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import GlobalStyle from '../../GlobalStyles'
import * as st from './getfriend.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
import { useRouter } from 'next/navigation'
import { getContacts } from '@/app/utils/write/getContacts'
type Contact = {
  name: string
  phone: string
}

export default function GetFriend() {
  const [phone, setPhone] = useState('')
  const [contacts, setContacts] = useState<Contact[]>([])
  const [selectedContactIndex, setSelectedContactIndex] = useState(-1)
  useEffect(() => {
    const getData = async () => {
      const res = await getContacts()
      setContacts(res.data)
      //console.log('received contacts', res.data)
    }
    getData()
  }, [])
  const router = useRouter()

  const selectContact = (index: number) => {
    setPhone(contacts[index].phone)
    setSelectedContactIndex(index)
  }

  const handleSendClick = async () => {
    if (phone === '') {
      alert('보낼 사람을 선택해주세요!')
    } else {
      router.replace(`/write/wfriend/input?phone=${phone}`)
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
                $isSelected={selectedContactIndex === index}
              >
                <st.ContactName>{contact.name}</st.ContactName>
                <st.ContactPhone>전화번호 : {contact.phone}</st.ContactPhone>
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
