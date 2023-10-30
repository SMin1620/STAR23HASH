'use client'

import * as c from '../storageComponent.styled'
import { useRouter } from 'next/navigation'

type Props = {
  id: number
  planetNumber: number
  name: string
  date: string
  state?: string
}

export default function PlanetCard({
  id,
  planetNumber,
  name,
  date,
  state,
}: Props) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/storage/random/${id}`)
  }

  return (
    <c.Card className="group" onClick={handleClick}>
      <c.CardImageWrapper className=" aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full group-hover:opacity-75">
        {state === 'written' ? (
          <c.CardStateImage
            className="w-1/3"
            src="/icons/Check.svg"
            alt="state"
          />
        ) : null}
        <c.CustomImage
          src={`/icons/planets/Planet-${planetNumber}.svg`}
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
