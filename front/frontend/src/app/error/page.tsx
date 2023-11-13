'use client'

import * as e from '@/app/loginMain.styled'
import { useRouter } from 'next/navigation'

export default function Error() {
  const router = useRouter()

  return (
    <>
      <e.ErrorBoard className="absolute h-screen w-screen ">
        <e.ErrorContainer className=" w-72   md:w-3/5 lg:w-3/5">
          <e.CustomImage
            src="/icons/Preparing.png"
            alt="prepare image"
            className="ml-auto mr-auto mt-4 aspect-auto pl-8 pr-8"
          />
          <e.ErrorTitle>따흑..</e.ErrorTitle>
          <e.ErrorContent>문제가 발생했어요..</e.ErrorContent>
          <e.ErrorCode>일해라 개발자..!</e.ErrorCode>
          <e.ReturnButton
            onClick={() => {
              router.back()
            }}
          >
            돌아가기
          </e.ReturnButton>
        </e.ErrorContainer>
      </e.ErrorBoard>
    </>
  )
}
