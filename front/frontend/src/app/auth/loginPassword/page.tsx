'use client'
import Logincomponent from '../../../component/Three/login'
import { useState, useEffect } from 'react'
import PhoneStore from '@/store/phone'
import { useRouter } from 'next/navigation'

export default function LoginPassword() {
  const router = useRouter()
  const { phone, setPhone } = PhoneStore()
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    console.log(phone)
  })

  // 암호확인 로직
  function passwordClick() {
    if (inputValue !== '1234') {
    } else {
      router.push('/main')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="absolute z-10">
          <div
            style={{ marginTop: '790px' }}
            className="flex flex-col items-center justify-center"
          >
            <div className="pb-10 text-4xl text-white">별이삼샵</div>
            <div className="mb-9">
              <img src="/assets/Astronaut-4.png" style={{ width: '230px' }} />
            </div>
            <div>{phone}</div>
            <input
              style={{ width: '220px', height: '35px' }}
              className="mb-5 rounded-lg bg-gray-300 text-center text-sm opacity-50	"
              placeholder="비밀번호를 입력해주세요"
              name="phone"
              type="password"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button
              onClick={passwordClick}
              style={{
                backgroundColor: '#D9D9D9',
                padding: '10px 20px 10px 20px',
                borderRadius: '10px',
              }}
            >
              확인
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
