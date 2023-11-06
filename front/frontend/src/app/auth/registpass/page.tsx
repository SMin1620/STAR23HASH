'use client'
import React, { useState, useEffect, useCallback } from 'react'
import * as r from './registpass.styled'
import LoginComponent from '@/component/Three/login'
import './registpass.styled'

export default function RegistPass() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passMessage, setPassMessage] = useState('')
  const [confirmPassMessage, setConfirmPassMessage] = useState('')

  const [isValid, setIsValid] = useState(false)
  const [isMatch, setIsMatch] = useState(false)

  // 암호
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^[A-Za-z\d]{4,}$/
    const passCurrent = e.target.value
    setPassword(passCurrent)
    if (!passwordRegex.test(passCurrent)) {
      setPassMessage('영문이나 숫자 영문+숫자 조합의 4글자로 만들어주세요!')
      setIsValid(false)
    } else {
      setPassMessage('좋아요!')
      setIsValid(true)
    }
  }, [])

  // 비밀번호 같은지 확인
  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value
      setConfirmPassword(passwordConfirmCurrent)

      if (password === passwordConfirmCurrent) {
        setConfirmPassMessage('비밀번호를 똑같이 입력했어요 : )')
        setIsMatch(true)
      } else {
        setConfirmPassMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
        setIsMatch(false)
      }
    },
    [password],
  )

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="absolute z-10">
          <div
            style={{ marginTop: '790px' }}
            className="flex flex-col items-center justify-center"
          >
            <div className="pb-10 text-4xl text-white">별이삼샵</div>
            <div className="text-4xl text-white"></div>
            <r.inputStyle
              placeholder="비밀번호를 입력해주세요"
              name="phone"
              type="password"
              value={password}
              onChange={onChangeName}
              // onBlur={handlePasswordBlur}
              isValid={isValid}
            ></r.inputStyle>
            <span
              className={`message ${
                isValid ? 'success' : 'error'
              } mb-3 text-white`}
            >
              {passMessage}
            </span>

            <r.inputStyle
              placeholder="비밀번호를 확인해주세요"
              name="phone"
              type="password"
              value={confirmPassword}
              onChange={onChangePasswordConfirm}
              isMatch={isMatch}
            ></r.inputStyle>
            <span
              className={`message ${
                isMatch ? 'success' : 'error'
              } mb-3 text-white`}
            >
              {confirmPassMessage}
            </span>
            <r.Button>확인</r.Button>
          </div>
        </div>
      </div>
      <LoginComponent
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
