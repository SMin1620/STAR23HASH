import Link from 'next/link'
import GlobalStyle from './GlobalStyles'
import * as st from './write.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'

export default function Write() {
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
          <st.ContentBox>
            <st.WhoSend>누구에게 편지를 보낼까요?</st.WhoSend>
            <st.SendObject>
              <Link href={'/write/wfriend/getfriend'}>
                <st.SendImg
                  src="/write/Solar System.svg"
                  alt="친구에게 보내기"
                ></st.SendImg>
                <st.SendText>친구</st.SendText>
              </Link>
              <Link href={'/write/wrandom'}>
                <st.SendImg
                  src="/write/Rocket-2.svg"
                  alt="랜덤친구 사귀기"
                ></st.SendImg>
                <st.SendText>랜덤</st.SendText>
              </Link>
            </st.SendObject>
          </st.ContentBox>
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
