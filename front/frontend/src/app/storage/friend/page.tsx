import Link from 'next/link'
import * as f from './friend.styled'
import BackButton from '@/component/storage/BackButton'
import LetterCard from '@/component/storage/friend/LetterCard'

export default function Friend() {
  return (
    <>
      <f.FriendPage className="absolute h-screen w-screen">
        <BackButton />

        <f.CalenderButton>
          <f.CustomImage className="h-28 w-20" src="/icons/CalenderBtn.svg" />
          <f.Calender>캘린더</f.Calender>
        </f.CalenderButton>
        <f.DateContainer>2023.10.12</f.DateContainer>

        <f.LetterItemContainer className="h-screen">
          <f.LetterItemWrapper className='className=" xl:gap-x-8"  grid-cols-3 gap-x-8 gap-y-5 sm:grid-cols-3  lg:grid-cols-3 xl:m-12 xl:grid-cols-3'>
            {/* LetterCard component */}
            <LetterCard id={0} type={0} />
            <LetterCard id={1} type={1} />
            <LetterCard id={2} type={2} />
            <LetterCard id={3} type={3} />
            {/* LetterCard component end */}
          </f.LetterItemWrapper>
        </f.LetterItemContainer>
      </f.FriendPage>
    </>
  )
}
