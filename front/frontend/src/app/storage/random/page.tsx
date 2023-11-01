import Link from 'next/link'
import * as r from './random.styled'

import BackButton from '@/component/storage/BackButton'
import PlanetCard from '@/component/storage/random/PlanetCard'

export default function Ramdon() {
  return (
    <>
      <r.RandomPage className="absolute h-screen">
        <BackButton />

        <r.TitleWrapper>
          <r.CustomImage src="/icons/SolarSystem.svg" />
          <r.Title>랜덤메시지</r.Title>
        </r.TitleWrapper>

        <r.RandomCardContainer className="h-screen w-screen">
          <r.RandomCardWrapper className=" m-4 grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {/* card component start */}

            {/* <r.Card className="group">
              <Link href="/storage/random/{ID}">
                <r.CardImageWrapper className=" aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full group-hover:opacity-75">
                  <r.CardStateImage
                    className=" w-1/3 "
                    src="/icons/Check.svg"
                    alt="state"
                  />
                  <r.CustomImage
                    src="/icons/planets/Planet-1.svg"
                    alt="planet icon."
                    className=" h-full w-full object-cover object-center "
                  />
                </r.CardImageWrapper>
                <r.TitleWrapper>
                  <r.CardTitle>풍성한 크리링</r.CardTitle>
                  <r.CardUpdateDate>2023.10.12</r.CardUpdateDate>
                </r.TitleWrapper>
              </Link>
            </r.Card> */}

            <PlanetCard
              id={1}
              planetNumber={1}
              name="김감자"
              date="2020.02.02"
              state="written"
            />
            <PlanetCard
              id={Math.floor(Math.random() * 15) + 1}
              planetNumber={Math.floor(Math.random() * 15) + 1}
              name="김김자"
              date="2020.02.02"
              state="written"
            />

            {/* card component end */}
          </r.RandomCardWrapper>
        </r.RandomCardContainer>
      </r.RandomPage>
    </>
  )
}
