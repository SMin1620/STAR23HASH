'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Logincomponent from '../../../component/Three/login'
import Modal from '../../../component/login/modal'
import PhoneStore from '@/store/phone'

export default function loginMain() {
  const pathname = usePathname()
  const { phone, setPhone } = PhoneStore()
  const router = useRouter()
  const [inputValue, setInputValue] = useState<string>('')
  const [showModal, setShowModal] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)

  function loginClick() {
    if (inputValue !== '1234') {
      setPhone(inputValue)
      setShowModal(true)
      setLoginSuccess(false)
    } else {
      setLoginSuccess(true)
      setPhone(inputValue)
      router.push('/auth/loginPassword')
    }
  }

  // 모달 창이 닫힐 때 input 창을 비우는 함수
  const closeModal = () => {
    setShowModal(false)
    setInputValue('') // input 창 초기화
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
            <input
              style={{ width: '220px', height: '35px' }}
              className="mb-5 rounded-lg bg-gray-300 text-center text-sm opacity-50	"
              placeholder="전화번호를 입력해 주세요"
              name="phone"
              type="tel"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button onClick={loginClick}>로그인</button>
            {showModal && (
              <Modal
                onClose={closeModal}
                message={loginSuccess ? true : false}
              />
            )}
          </div>
        </div>
      </div>
      <Logincomponent
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
