'use client'

import * as c from '../storageComponent.styled'
import { useRouter } from 'next/navigation'

type Props = {
  historyId: number
  noteId: number
  name: string
  date: string
  content: string
  isNew: boolean
}

export default function ReceivedLetter({
  historyId,
  noteId,
  name,
  date,
  content,
  isNew,
}: Props) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/storage/random/${historyId}/${noteId}`)
  }

  return (
    <c.LetterReceived>
      {!isNew ? (
        <c.IsNewLetterImage
          onClick={handleClick}
          className="w-12"
          src="/icons/ShowAllBtn.svg"
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
