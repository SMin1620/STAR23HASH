import Link from 'next/link'
import * as r from './random.styled'

import BackButton from '@/component/storage/BackButton'
import PlanetCard from '@/component/storage/random/PlanetCard'

export default function Ramdon() {
  return (
    <>
      <r.RandomPage className="h-screen">
        <BackButton />

        <r.TitleWrapper>
          <r.CustomImage src="/icons/SolarSystem.svg" />
          <r.Title>랜덤메시지</r.Title>
        </r.TitleWrapper>

        <r.RandomCardContainer className="h-screen ">
          <r.RandomCardWrapper className=" m-4 grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {/* card component start */}

            <PlanetCard
              id={Math.floor(Math.random() * 15) + 1}
              planetNumber={Math.floor(Math.random() * 15) + 1}
              name="김감자"
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
