'use client'

import * as c from '../storageComponent.styled'
import { useRouter } from 'next/navigation'

type Props = {
  historyId: number
  noteId: number
  name: string
  date: string
  content: string
  isReply: boolean
}

export default function ReceivedLetter({
  historyId,
  noteId,
  name,
  date,
  content,
  isReply,
}: Props) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/storage/random/${historyId}/${noteId}`)
  }

  return (
    <c.LetterReceived>
      {!isReply ? (
        <c.IsNewLetterImage
          onClick={handleClick}
          className="w-12"
          src="/icons/ShowAllBtn.png"
        />
      ) : null}

      <c.LetterHeader>
        <c.LetterName>{name}</c.LetterName>
        <c.LetterDate>{date}</c.LetterDate>
      </c.LetterHeader>

      <c.LetterContent>{content}</c.LetterContent>
    </c.LetterReceived>
  )
}
