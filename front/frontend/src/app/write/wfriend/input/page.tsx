import Link from 'next/link'
import GlobalStyle from '../../GlobalStyles'
import * as st from './inputfriend.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'

export default function WriteFriend() {
  return (
    <>
      <GlobalStyle />
      <stt.SendBox>
        <stt.InnerCircle>
          <stt.InnerCircle1></stt.InnerCircle1>
          <stt.InnerCircle2></stt.InnerCircle2>
          <stt.InnerCircle3></stt.InnerCircle3>
          <st.SpaceImg
            src="/write/send_friend.png"
            alt="이미지 불러오기 실패"
          ></st.SpaceImg>
        </stt.InnerCircle>
        <st.ContentBox>
          <st.InputContent></st.InputContent>

          <st.AddContent></st.AddContent>
        </st.ContentBox>
        <stt.button>확인</stt.button>
      </stt.SendBox>
    </>
  )
}
