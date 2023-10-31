'use client'

import { useRouter } from 'next/navigation'
import * as c from '../storageComponent.styled'

enum LetterType {
  'Text',
  'Picture',
  'Video',
  'Sound',
}

type Props = {
  id: number
  type: LetterType
}

export default function LetterCard({ id, type }: Props) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/storage/friend/${id}`)
  }

  return (
    <c.Item
      onClick={handleClick}
      className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 group w-full"
    >
      <c.CustomImage
        src={`/icons/${LetterType[type]}.svg`}
        alt="item."
        className=" h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </c.Item>
  )
}
