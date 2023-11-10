'use client'

import { useRouter } from 'next/navigation'
import * as c from '../storageComponent.styled'

enum LetterType {
  'Sound',
  'Video',
  'Picture',
  'Text',
}

type Props = {
  id: number
  type: LetterType
  isRead: boolean
}

export default function LetterCard({ id, type, isRead }: Props) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/storage/friend/${id}`)
  }

  return (
    <c.Item
      onClick={handleClick}
      className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 group w-full"
    >
      {isRead ? (
        <c.CardStateImage
          className="w-1/3"
          src="/icons/Check.png"
          alt="state"
        />
      ) : null}

      <c.CustomImage
        src={`/icons/${LetterType[type]}.svg`}
        alt="item."
        className=" h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </c.Item>
  )
}
