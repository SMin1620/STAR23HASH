'use client'
import { userTest } from '@/app/utils/storage/userTest'

export default function LoginButton() {
  const handleClick = () => {
    userTest()
  }

  return (
    <>
      <button onClick={handleClick}>로그인테스트</button>
    </>
  )
}
