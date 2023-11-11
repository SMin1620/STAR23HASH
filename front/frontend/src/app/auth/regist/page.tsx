'use client'
import { useState, useEffect } from 'react'
import PhoneStore from '@/store/phone'
import { sendSmsAxios } from '@/app/utils/sms/sendSmsAxios'
import { confirmsSmsAxios } from '@/app/utils/sms/confirmsSmsAxios'
import { useRouter } from 'next/navigation'
import * as r from './regist.styled'

export default function Regist() {
  const router = useRouter()
  // const { phone } = PhoneStore()
  const [phone, setPhone] = useState('01048436836')
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    console.log(phone)
  })

  // 인증확인 로직
  async function PasswordAuthClick() {
    const check = await confirmsSmsAxios(phone, inputValue)
    if (check.data.data) {
      alert('인증 완료되었습니다!')
      router.push('/auth/registpass')
    } else {
      alert('인증번호가 틀렸어요ㅜㅜ 다시한번 확인해주세요!')
    }
  }

  //인증번호 보내는 로직
  async function sendAuthClick() {
    const isConfirmed = window.confirm('전화번호가 ' + phone + ' 맞으신가요?')
    if (!isConfirmed) {
      alert('전화번호를 다시 입력해주세요.')
      router.replace('/')
      return
    } else {
      const check = await sendSmsAxios(phone)
      alert('인증번호가 전송되었습니다.')
    }
  }

  function changePhone() {
    router.replace('/')
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-2 text-5xl text-white">{phone}</div>
      <r.RegistButton onClick={changePhone}>전화번호 다시쓰기</r.RegistButton>
      <r.RegistButton onClick={sendAuthClick}>인증번호 전송</r.RegistButton>
      <input
        style={{ width: '220px', height: '35px' }}
        className="mb-2 rounded-lg text-center text-sm opacity-60	"
        placeholder="인증번호를 입력해주세요"
        name="phone"
        type="string"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>

      <button
        onClick={PasswordAuthClick}
        style={{
          width: '100px',
          backgroundColor: '#D9D9D9',
          padding: '10px 20px 10px 20px',
          borderRadius: '10px',
        }}
      >
        인증
      </button>
    </div>
  )
}
