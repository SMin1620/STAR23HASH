'use client'
import { useState, useEffect } from 'react'
import PhoneStore from '@/store/phone'
import { useRouter } from 'next/navigation'
import * as r from './regist.styled'

export default function Regist() {
  const router = useRouter()
  const { phone } = PhoneStore()
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    console.log(phone)
  })

  // 인증확인 로직
  function PasswordAuthClick() {
    if (inputValue !== '1234') {
      alert('틀렸어용')
    } else {
      router.push('/auth/registpass')
    }
  }

  function sendAuthClick() {
    alert('인증번호가 전송되었습니다.')
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-6xl text-white">{phone}</div>
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
