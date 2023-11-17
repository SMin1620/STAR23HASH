'use client'

import * as c from '../storageComponent.styled'

type Props = {
  id: number
  name: string
  date: string
  content: string
}

export default function SentLetter({ id, name, date, content }: Props) {
  return (
    <c.LetterSent>
      <c.SentLetterHeader className="items-start">
        <c.LetterName>{name}</c.LetterName>
        <c.LetterDate>{date}</c.LetterDate>
      </c.SentLetterHeader>

      <c.LetterContent>{content}</c.LetterContent>
    </c.LetterSent>
  )
}
