import Link from 'next/link'
import GlobalStyle from '../GlobalStyles'
import * as st from './wrandom.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
export default function WriteFriend() {
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
          <st.SpaceImg src="/write/Rocket-2.svg" alt="Solar System" />

          <st.ContentBox>
            <st.InputContent></st.InputContent>
          </st.ContentBox>
          <Link href="/write/send">
            <stt.button>전송</stt.button>
          </Link>
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
