'use client'

import * as c from '../storageComponent.styled'
import { useRouter } from 'next/navigation'

type Props = {
  id: number
  planetNumber: number
  name: string
  date: string
  isRead?: boolean
  isReply?: boolean
}

export default function PlanetCard({
  id,
  planetNumber,
  name,
  date,
  isRead,
  isReply,
}: Props) {
  const router = useRouter()

  const handleClick = () => {
    router.push(
      `/storage/random/${id}?planetNumber=${planetNumber}&senderName=${name}`,
    )
  }

  return (
    <c.Card className="group" onClick={handleClick}>
      <c.CardImageWrapper className=" aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full group-hover:opacity-75">
        {isReply ? (
          <c.CardStateImage
            className="w-1/3"
            src="/icons/Check.png"
            alt="state"
          />
        ) : null}
        <c.CustomImage
          src={`/icons/planets/Planet-${planetNumber}.png`}
          alt="planet icon."
          className=" h-full w-full object-cover object-center "
        />
      </c.CardImageWrapper>
      <c.TitleWrapper>
        <c.CardTitle>{name}</c.CardTitle>
        <c.CardUpdateDate>{date}</c.CardUpdateDate>
      </c.TitleWrapper>
    </c.Card>
  )
}
