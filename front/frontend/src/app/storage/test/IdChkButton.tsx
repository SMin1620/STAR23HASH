'use client'
import { authAxiosTest } from '@/app/utils/storage/authAxiosTest'
export default function IdChkButton() {
  const handleClick = () => {
    authAxiosTest()
  }

  return (
    <>
      <button onClick={handleClick}>[Axios 실행]</button>
    </>
  )
}
