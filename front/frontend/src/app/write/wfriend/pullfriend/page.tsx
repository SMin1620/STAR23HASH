import Link from 'next/link'
import GlobalStyle from '../../GlobalStyles'
import * as st from './pullfriend.styled'
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
          <st.ContentBox>
            <st.WhoSend>연락처를 가져와야 해요! </st.WhoSend>
            <st.WhoSend>연락처 접근 권한을 허용해주세요 </st.WhoSend>
          </st.ContentBox>
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
