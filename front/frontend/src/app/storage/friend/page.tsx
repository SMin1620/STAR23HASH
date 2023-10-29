import Link from 'next/link'
import GlobalStyle from '../GlobalStyles'
import * as f from './friend.styled'

export default function Friend() {
  return (
    <>
      <GlobalStyle />
      <div className="flex h-screen flex-col">
        <f.BackBtnWrapper className="flex">
          <f.CustonImage
            className="m-2 h-7 w-7 object-contain"
            src="/icons/BackBtn.svg"
          />
        </f.BackBtnWrapper>

        <f.FriendHeadWrapper>
          <f.CustonImage className="w-20" src="/icons/CalenderBtn.svg" />
          <p className="text-base font-bold text-white">캘린더</p>
        </f.FriendHeadWrapper>
        <span className="mb-4 ml-auto mr-auto text-4xl font-bold text-white">
          2023.10.12
        </span>

        <f.LetterItemWrapper className="h-screen w-full overflow-y-scroll ">
          <div className='className=" xl:gap-x-8" m-8 grid grid-cols-3 gap-x-8 gap-y-5 sm:grid-cols-3  lg:grid-cols-3 xl:m-12 xl:grid-cols-3'>
            <Link href="/storage/friend/letter" className="min-w- group">
              <div className=" aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
                <f.CustonImage
                  src="/icons/Text.svg"
                  alt="item."
                  className=" h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            </Link>
            <Link href="/storage/friend/letter" className="min-w- group">
              <div className=" aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
                <f.CustonImage
                  src="/icons/Video.svg"
                  alt="item."
                  className=" h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            </Link>
            <Link href="/storage/friend/letter" className="min-w- group">
              <div className=" aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
                <f.CustonImage
                  src="/icons/Picture.svg"
                  alt="item."
                  className=" h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            </Link>
            <Link href="/storage/friend/letter" className="min-w- group">
              <div className=" aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
                <f.CustonImage
                  src="/icons/Sound.svg"
                  alt="item."
                  className=" h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            </Link>
          </div>
        </f.LetterItemWrapper>
      </div>
    </>
  )
}
