'use client'

import { idCheckTest } from '@/app/utils/storage/idCheckTest'
import { authAxiosTest } from '@/app/utils/storage/authAxiosTest'
export default function IdChkButton() {
  const handleClick = () => {
    authAxiosTest()
  }

  return (
    <>
      <button onClick={handleClick}>아이디 체크</button>
    </>
  )
}
