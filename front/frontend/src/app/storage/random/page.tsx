'use client'
import * as r from './random.styled'

import BackButton from '@/component/storage/BackButton'
import PlanetCard from '@/component/storage/random/PlanetCard'
// import TestPlanetCard from '../test/testcomponent/TestPlanetCard'
import { getRandomRooms } from '@/app/utils/storage/getRandomRooms'
import { Room } from '@/app/types/storage/types'
import { useEffect, useState } from 'react'
export default function Ramdom() {
  const [randomRoomList, setRandomRoomList] = useState<Room[]>()

  useEffect(() => {
    const getRooms = async () => {
      try {
        const resopnse = await getRandomRooms()
        setRandomRoomList(resopnse.data)
      } catch (error) {
        console.error('Error fetching random rooms:', error)
      }
    }

    getRooms()
  }, [])

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

            {randomRoomList &&
              randomRoomList.map((room) => (
                <PlanetCard
                  key={room.id}
                  id={room.id}
                  planetNumber={Math.floor(Math.random() * 15) + 1}
                  name={room.senderName}
                  date={room.createdAt}
                  isReply={room.read}
                />
              ))}

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
            {/* <TestPlanetCard
              id={1}
              planetNumber={1}
              name="김감자"
              date="2020.02.02"
              state="written"
            />
            <TestPlanetCard
              id={1}
              planetNumber={3}
              name="김감자"
              date="2020.02.02"
              state="written"
            />
            <TestPlanetCard
              id={1}
              planetNumber={5}
              name="김감자"
              date="2020.02.02"
              state="written"
            />
            <TestPlanetCard
              id={1}
              planetNumber={6}
              name="김감자"
              date="2020.02.02"
              state="written"
            />
            <TestPlanetCard
              id={1}
              planetNumber={4}
              name="김감자"
              date="2020.02.02"
              state="written"
            /> */}

            {/* card component end */}
          </r.RandomCardWrapper>
        </r.RandomCardContainer>
      </r.RandomPage>
    </>
  )
}
