import Link from 'next/link'
import GlobalStyle from '../GlobalStyles'
import * as st from './sendresult.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'

export default function loading() {
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
            <st.Loading
              src="/write/Planet & Rocket.svg"
              alt="loading..."
            ></st.Loading>
            <st.LoadingText>편지를 보내는 중이에요!</st.LoadingText>
          </st.ContentBox>
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
