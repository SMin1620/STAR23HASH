'use client'
import userTest from '@/app/utils/storage/userTest'

export default function LoginButton() {
  const handleClick = () => {
    userTest()
  }

  // const accessToken = TokenStore.getState().getToken()
  // console.log('Access Token:', accessToken)

  return (
    <>
      <button onClick={handleClick}>로그인테스트</button>
    </>
  )
}
