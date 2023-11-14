'use client'
import * as r from './random.styled'

import BackButton from '@/component/storage/BackButton'
import PlanetCard from '@/component/storage/random/PlanetCard'
import { getRandomRooms } from '@/app/utils/storage/getRandomRooms'
import { Room } from '@/app/types/storage/types'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Ramdom() {
  const router = useRouter()

  const [randomRoomList, setRandomRoomList] = useState<Room[]>()

  useEffect(() => {
    const getRooms = async () => {
      try {
        const resopnse = await getRandomRooms()
        setRandomRoomList(resopnse.data)
      } catch (error) {
        router.replace('error')
      }
    }

    getRooms()
  }, [])

  return (
    <>
      <r.RandomPage className="absolute h-screen">
        <BackButton />

        <r.TitleWrapper>
          <r.CustomImage src="/icons/SolarSystem.png" />
          <r.Title>랜덤메시지</r.Title>
        </r.TitleWrapper>

        <r.RandomCardContainer className="h-screen w-screen">
          <r.RandomCardWrapper className=" m-4 grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
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
          </r.RandomCardWrapper>
        </r.RandomCardContainer>
      </r.RandomPage>
    </>
  )
}
