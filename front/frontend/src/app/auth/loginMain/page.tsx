'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Logincomponent from '../../../component/Three/login'
import Modal from '../../../component/login/modal'
import PhoneStore from '@/store/phone'
import { loginAxios } from '@/app/utils/loginAxios'
import * as m from './loginmain.styled'

export default function loginMain() {
  const { setPhone } = PhoneStore()
  const router = useRouter()
  const [inputValue, setInputValue] = useState<string>('')
  const [showModal, setShowModal] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)

  async function phoneCheck(inputValue: string) {
    try {
      const data = await loginAxios(inputValue)
      return data.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async function loginClick() {
    const check = await phoneCheck(inputValue)
    console.log(check)
    if (check == false) {
      setPhone(inputValue)
      setShowModal(true)
      setLoginSuccess(false)
    } else {
      setLoginSuccess(true)
      setPhone(inputValue)
      router.push('/auth/loginPassword')
    }
  }

  // 모달 창 닫을때 input 창 비우는 함수
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
            <m.inputStyle
              placeholder="전화번호를 입력해 주세요"
              name="phone"
              type="tel"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></m.inputStyle>
            <m.Button onClick={loginClick}>로그인</m.Button>
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
