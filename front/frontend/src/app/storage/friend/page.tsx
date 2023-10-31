import Link from 'next/link'
import * as f from './friend.styled'
import BackButton from '@/component/storage/BackButton'

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
            {/* item start */}
            <f.Item className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 group w-full">
              <Link href="/storage/friend/{id}">
                <f.CustomImage
                  src="/icons/Text.svg"
                  alt="item."
                  className=" h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </Link>
            </f.Item>
            {/* item end */}

            {/* item start */}
            <f.Item className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 group w-full">
              <Link href="/storage/friend/{id}">
                <f.CustomImage
                  src="/icons/Video.svg"
                  alt="item."
                  className=" h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </Link>
            </f.Item>
            {/* item end */}

            {/* item start */}
            <f.Item className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 group w-full">
              <Link href="/storage/friend/{id}">
                <f.CustomImage
                  src="/icons/Picture.svg"
                  alt="item."
                  className=" h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </Link>
            </f.Item>
            {/* item end */}

            {/* item start */}
            <f.Item className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 group w-full">
              <Link href="/storage/friend/{id}">
                <f.CustomImage
                  src="/icons/Sound.svg"
                  alt="item."
                  className=" h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </Link>
            </f.Item>
            {/* item end */}
          </f.LetterItemWrapper>
        </f.LetterItemContainer>
      </f.FriendPage>
    </>
  )
}
