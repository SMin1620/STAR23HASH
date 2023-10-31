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
      <c.LetterHeader className="items-end">
        <c.LetterName>{name}</c.LetterName>
        <c.LetterDate>{date}</c.LetterDate>
      </c.LetterHeader>

      <c.LetterContent>{content}</c.LetterContent>
    </c.LetterSent>
  )
}
