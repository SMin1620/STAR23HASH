'use client'

import Link from 'next/link'
import * as f from './friend.styled'
import BackButton from '@/component/storage/BackButton'
import LetterCard from '@/component/storage/friend/LetterCard'
import { useEffect, useState } from 'react'
import { Letter } from '@/app/types/storage/types'
import { getLetters } from '@/app/utils/storage/getLetters'

export default function Friend() {
  const [letterList, setLetterList] = useState<Letter[]>()

  useEffect(() => {
    const getLetterList = async () => {
      try {
        const resopnse = await getLetters()
        setLetterList(resopnse.data)
        console.log('letterList : ', resopnse.data)
      } catch (error) {
        console.error('Error fetching random rooms:', error)
      }
    }

    getLetterList()
  }, [])

  return (
    <>
      <f.FriendPage className="absolute h-screen w-screen">
        <BackButton />

        <f.TitleWrapper>
          <f.CustomImage src="/icons/FriendLogo.svg" />
          <f.Title>친구메시지</f.Title>
        </f.TitleWrapper>

        <f.LetterItemContainer className="h-screen">
          <f.LetterItemWrapper className='className=" xl:gap-x-8"  grid-cols-3 gap-x-8 gap-y-5 sm:grid-cols-3  lg:grid-cols-3 xl:m-12 xl:grid-cols-3'>
            {/* LetterCard component */}

            {letterList &&
              letterList.map((letter) => (
                <LetterCard
                  key={letter.id}
                  id={letter.id}
                  type={letter.type}
                  isRead={letter.isRead}
                />
              ))}
            {/* <LetterCard id={0} type={0} isRead={true} />
            <LetterCard id={1} type={1} isRead={true} />
            <LetterCard id={2} type={2} isRead={false} />
            <LetterCard id={3} type={3} isRead={true} /> */}
            {/* LetterCard component end */}
          </f.LetterItemWrapper>
        </f.LetterItemContainer>
      </f.FriendPage>
    </>
  )
}
