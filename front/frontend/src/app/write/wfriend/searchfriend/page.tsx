'use client'
import { useState } from 'react'
import GlobalStyle from '../../GlobalStyles'
import * as st from './searchfriend.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
import { useRouter } from 'next/navigation'
import { loginAxios } from '@/app/utils/loginAxios'
type Contact = {
  name: string
  phone: string
}

export default function PullFriend() {
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

  const handleInputText = () => {
    if (result) {
      router.replace(`/write/wfriend/input?phone=${phone}`)
    } else {
      alert('연락처를 확인해 주세요!')
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
            <st.WhoSend>편지를 보낼 수 있는지 </st.WhoSend>
            <st.WhoSend>확인해 볼까요? ✿◡‿◡ </st.WhoSend>
            <st.EmptyDiv>
              <st.ModalPhone
                value={phone}
                placeholder="연락처를 조회해보세요'v'"
                onChange={(e) => setPhone(e.target.value)}
              ></st.ModalPhone>
              <st.SearchButton onClick={Search}>조회</st.SearchButton>
            </st.EmptyDiv>
            {result ? (
              <st.possible>{resultMessage}</st.possible>
            ) : (
              <st.impossible>{resultMessage}</st.impossible>
            )}
          </st.ContentBox>
          <stt.EmptyDiv>
            <stt.button onClick={handleInputText}>전송하기</stt.button>
          </stt.EmptyDiv>
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
