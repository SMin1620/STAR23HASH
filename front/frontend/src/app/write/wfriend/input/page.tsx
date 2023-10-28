import Link from 'next/link'
import GlobalStyle from '../../GlobalStyles'
import * as st from './inputfriend.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'

export default function WriteFriend() {
  return (
    <>
      <GlobalStyle />
      <div className="flex h-screen w-screen items-center justify-center">
        <stt.SendBox className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full">
          <st.SpaceImgContainer>
            <stt.InnerCircle>
              <stt.InnerCircle1></stt.InnerCircle1>
              <stt.InnerCircle2></stt.InnerCircle2>
              <stt.InnerCircle3></stt.InnerCircle3>
            </stt.InnerCircle>
            <st.SpaceImg src="/write/Solar System.svg" alt="Solar System" />
          </st.SpaceImgContainer>
          <st.ContentBox>
            <st.InputContent></st.InputContent>
            <st.Hint>
              <st.HintCheck type="checkbox" />
              <st.HintCheckCustom />
              나에 대한 힌트 주기
            </st.Hint>
            <st.AddContent>
              <st.ContentInfoText>어떤걸 추가 해볼까?</st.ContentInfoText>
              <st.Medias>
                <st.Media src="/write/voice.svg" alt="voice"></st.Media>
                <st.Media src="/write/video.svg" alt="video"></st.Media>
                <st.Media src="/write/picture.svg" alt="picture"></st.Media>
              </st.Medias>
            </st.AddContent>
            <stt.button>확인</stt.button>
          </st.ContentBox>
        </stt.SendBox>
      </div>
    </>
  )
}
