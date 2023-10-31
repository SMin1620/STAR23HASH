'use client'
import { useState, ChangeEvent } from 'react'
import Link from 'next/link'
import Logincomponent from '../../../component/Three/login'
import Modal from '../../../component/login/modal'

export default function LoginMain() {
  const [inputValue, setInputValue] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)

  function loginClick() {
    if (inputValue !== '1234') {
      setShowModal(true)
      setLoginSuccess(false)
    } else {
      setShowModal(true)
      setLoginSuccess(true)
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
            <input
              style={{ width: '220px', height: '35px' }}
              className="mb-5 rounded-lg bg-gray-300 text-center text-sm opacity-50	"
              placeholder="전화번호를 입력해 주세요"
              name="phone"
              type="tel"
              // value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button onClick={loginClick}>로그인</button>
            {showModal && (
              <Modal
                onClose={() => setShowModal(false)}
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
