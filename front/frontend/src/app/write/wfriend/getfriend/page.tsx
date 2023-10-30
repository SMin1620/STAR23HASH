import Link from 'next/link'
import GlobalStyle from '../../GlobalStyles'
import * as st from './getfriend.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'

export default function WriteFriend() {
  const choice = () => {}
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
            <st.WhoSend>당신의 진심을 전달해보세요</st.WhoSend>
            <st.WhoSend>대충 연락처 불러오는부분</st.WhoSend>
          </st.ContentBox>
          <Link href="/write/wfriend/input">
            <stt.button>편지쓰기</stt.button>
          </Link>
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
