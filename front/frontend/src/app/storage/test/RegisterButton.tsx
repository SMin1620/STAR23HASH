'use client'
import testRegister from '@/app/utils/storage/testRegister'

export default function RegisterButton() {
  const handleClick = () => {
    testRegister()
  }

  return (
    <>
      <button onClick={handleClick}>[회원가입]</button>
    </>
  )
}
