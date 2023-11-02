'use client'
import Logincomponent from '../../../component/Three/login'
import { useState, useEffect } from 'react'
import PhoneStore from '@/store/phone'
import { useRouter } from 'next/navigation'

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
        <div className="absolute z-10">
          <div
            style={{ marginTop: '790px' }}
            className="flex flex-col items-center justify-center"
          >
            <div className="p-4 text-4xl text-white">별이삼샵</div>

            <div className="mb-3 text-6xl">{phone}</div>
            <button
              onClick={sendAuthClick}
              className="mb-5"
              style={{
                width: '220px',
                backgroundColor: '#D9D9D9',
                padding: '10px 20px 10px 20px',
                borderRadius: '10px',
              }}
            >
              인증번호 전송
            </button>
            <input
              style={{ width: '220px', height: '35px' }}
              className="mb-5 rounded-lg bg-gray-300 text-center text-sm opacity-50	"
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
        </div>
      </div>
      <Logincomponent
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
