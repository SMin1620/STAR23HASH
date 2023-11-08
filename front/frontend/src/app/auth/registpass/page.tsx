'use client'
import React, { useState, useEffect, useCallback } from 'react'
import * as r from './registpass.styled'
import { registAxios } from '@/app/utils/registAxios'
import { passwordAxios } from '@/app/utils/passwordAxios'
import { useRouter } from 'next/navigation'
import './registpass.styled'
import PhoneStore from '@/store/phone'

export default function RegistPass() {
  const router = useRouter()
  const { phone } = PhoneStore()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passMessage, setPassMessage] = useState('')
  const [confirmPassMessage, setConfirmPassMessage] = useState('')

  const [isValid, setIsValid] = useState(false)
  const [isMatch, setIsMatch] = useState(false)

  // 암호
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^[A-Za-z\d]{4}$/
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

  // 회원가입
  async function registClick() {
    if (isValid) {
      if (isMatch) {
        console.log(phone + ' ' + password)
        const check = await registAxios(phone, password)
        console.log(check)
        if (check.data.message === '회원가입 성공') {
          alert('회원가입 성공하셨습니다!')
          const a = await passwordAxios(phone, password)
          if (a.data.message == '로그인 성공') {
            router.push('/main')
          }
        } else {
          alert('회원가입에 실패하였습니다ㅜㅜ')
        }
      }
    } else {
      alert('회원가입에 실패하였습니다ㅜㅜ 비밀번호를 확인해주세요')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        placeholder="비밀번호를 입력해주세요"
        name="phone"
        type="password"
        value={password}
        onChange={onChangeName}
        style={{
          width: '240px',
          height: '45px',
          marginBottom: '15px',
          borderRadius: '10px',
          opacity: '0.7',
          textAlign: 'center',
          backgroundColor: 'rgb(203 213 225)',
          fontSize: '15px',
          border: isValid ? '4px solid #65F662' : '4px solid #FF4A4A',
        }}
      ></input>
      <span
        className={`message ${isValid ? 'success' : 'error'} mb-3 text-white`}
      >
        {passMessage}
      </span>
      <input
        placeholder="비밀번호를 확인해주세요"
        name="phone"
        type="password"
        value={confirmPassword}
        onChange={onChangePasswordConfirm}
        style={{
          width: '240px',
          height: '45px',
          marginBottom: '15px',
          borderRadius: '10px',
          opacity: '0.7',
          textAlign: 'center',
          backgroundColor: 'rgb(203 213 225)',
          fontSize: '15px',
          border: isMatch ? '4px solid #65F662' : '4px solid #FF4A4A',
        }}
      ></input>
      <span
        className={`message ${isMatch ? 'success' : 'error'} mb-3 text-white`}
      >
        {confirmPassMessage}
      </span>
      <r.Button onClick={registClick}>확인</r.Button>
    </div>
  )
}
