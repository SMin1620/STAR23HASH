'use client'
import { useState } from 'react'
import PhoneStore from '@/store/phone'
import { useRouter } from 'next/navigation'
import { passwordAxios } from '@/app/utils/passwordAxios'
import * as p from './loginpassword.styled'

export default function LoginPassword() {
  const router = useRouter()
  const { phone } = PhoneStore()
  const [inputValue, setInputValue] = useState('')

  // 암호확인 로직
  async function passwordClick() {
    if (inputValue === '') {
      alert('비밀번호를 입력해주세요')
    } else {
      // console.log('번호 :' + phone + '비번 : ' + inputValue)
      try {
        const a = await passwordAxios(phone, inputValue)

        if (a.data.message == '로그인 성공') {
          router.replace('/main')
        } else {
          alert('비밀번호가 틀렸습니다.')
        }
      } catch (error) {
        alert('비밀번호를 다시 확인해주세요.')
      }
      // console.log(a.data.message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" text-white">전화번호</div>
      <div className="text-4xl text-white">{phone}</div>
      <p.inputStyle
        placeholder="비밀번호를 입력해주세요"
        name="phone"
        type="password"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></p.inputStyle>
      <p.Button onClick={passwordClick}>확인</p.Button>
    </div>
  )
}
