'use client'
import Link from 'next/link'
import GlobalStyle from '../GlobalStyles'
import * as st from './sendresult.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
import Success from './component/success'
import Fail from './component/fail'
import { useRouter } from 'next/navigation'

type Props = {
  searchParams: {
    isSuccess: string
  }
}

export default function SendResult({ searchParams }: Props) {
  const router = useRouter()
  return (
    <>
      <GlobalStyle />
      <stt.SendBoxDiv className="flex h-screen w-screen items-center justify-center">
        <stt.SendBox className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full">
          <stt.InnerCircle>
            <stt.InnerCircle1></stt.InnerCircle1>
            <stt.InnerCircle2></stt.InnerCircle2>
            <stt.InnerCircle3></stt.InnerCircle3>
          </stt.InnerCircle>
          {searchParams.isSuccess === 'true' ? (
            <>
              <st.ContentBox>
                <Success />
              </st.ContentBox>
              <stt.EmptyDiv>
                <stt.button
                  onClick={() => {
                    router.back()
                  }}
                >
                  확인
                </stt.button>
              </stt.EmptyDiv>
            </>
          ) : (
            <>
              <st.ContentBox>
                <Fail />
              </st.ContentBox>
              <stt.EmptyDiv>
                <stt.button
                  onClick={() => {
                    router.back()
                  }}
                >
                  돌아가기
                </stt.button>
              </stt.EmptyDiv>
            </>
          )}
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
