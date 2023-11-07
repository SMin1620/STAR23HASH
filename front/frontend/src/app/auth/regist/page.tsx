'use client'
import Logincomponent from '../../../component/Three/login'
import { useState, useEffect } from 'react'
import PhoneStore from '@/store/phone'
import { useRouter } from 'next/navigation'
import LoginAstronaut from '../../../component/Three/loginAstronaut'
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
    <div>
      <div className="flex items-center justify-center">
        <r.ContentBox>
          <div className="flex flex-col items-center justify-center">
            <div className="p-4 text-4xl text-white">별이삼샵</div>
            <r.AstronauntDiv>
              <LoginAstronaut style={{ width: '100%', height: '100%' }} />
            </r.AstronauntDiv>
            <div className="mb-3 text-6xl text-white">{phone}</div>
            <r.RegistButton onClick={sendAuthClick} className="mb-5 px-4 py-2">
              인증번호 전송
            </r.RegistButton>
            <input
              style={{ width: '220px', height: '35px' }}
              className="mb-5 rounded-lg bg-gray-200 text-center text-sm opacity-60	"
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
        </r.ContentBox>
      </div>
      <Logincomponent
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
