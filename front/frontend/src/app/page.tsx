'use client'
import Modal from '../component/login/modal'
import * as m from './loginMain.styled'
import { useRouter } from 'next/navigation'
import PhoneStore from '@/store/phone'
import { loginAxios } from '@/app/utils/loginAxios'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'

export default function LoginMain() {
  const { setPhone } = PhoneStore()
  const router = useRouter()
  const [inputValue, setInputValue] = useState<string>('')
  const [showModal, setShowModal] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)

  const LoginComponent = React.useMemo(() => {
    return dynamic(
      () => import('../component/Three/login'), // LoginComponent의 실제 경로로 변경해야 합니다.
      { ssr: false }, // 이 옵션을 통해 서버 사이드 렌더링을 비활성화합니다.
    )
  }, [])

  const LoginAstronaut = React.useMemo(() => {
    return dynamic(
      () => import('../component/Three/loginAstronaut'), // LoginComponent의 실제 경로로 변경해야 합니다.
      { ssr: false }, // 이 옵션을 통해 서버 사이드 렌더링을 비활성화합니다.
    )
  }, [])

  async function phoneCheck(inputValue: string) {
    try {
      const data = await loginAxios(inputValue)
      console.log(data)
      return data.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async function loginClick() {
    const check = await phoneCheck(inputValue)
    console.log('체크')
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
        <m.ContentBox>
          <div className="flex flex-col items-center justify-center">
            <div className="pb-5 text-4xl text-white">별이삼샵</div>
            <m.AstronauntDiv>
              <LoginAstronaut style={{ width: '100%', height: '100%' }} />
            </m.AstronauntDiv>
            <div className="flex flex-col items-center justify-center">
              <m.inputStyle
                placeholder="전화번호를 입력해 주세요"
                name="phone"
                type="tel"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              ></m.inputStyle>
              <div className="text-l mb-3">
                -없이 입력해주세요. ex.01012345678
              </div>
              <m.Button onClick={loginClick}>확인</m.Button>
              {showModal && (
                <Modal
                  onClose={closeModal}
                  message={loginSuccess ? true : false}
                />
              )}
            </div>
          </div>
        </m.ContentBox>
      </div>
      <LoginComponent
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
