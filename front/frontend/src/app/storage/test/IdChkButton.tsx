'use client'

import { idCheckTest } from '@/app/utils/storage/idCheckTest'

export default function IdChkButton() {
  const handleClick = () => {
    idCheckTest()
  }

  return (
    <>
      <button onClick={handleClick}>아이디 체크</button>
    </>
  )
}
