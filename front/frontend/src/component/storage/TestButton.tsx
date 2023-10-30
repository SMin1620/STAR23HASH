'use client'

import { useRouter } from 'next/navigation'

type Props = {
  text: string
  onClick?: void
}

export default function TestButton({ text, onClick }: Props) {
  console.log(text)

  const router = useRouter()

  const handleClick = () => {
    router.back()
  }

  return <button onClick={handleClick}>테스트 버튼</button>
}
