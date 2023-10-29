'use client'
import Link from 'next/link'
import { useState } from 'react'
import GlobalStyle from '../../GlobalStyles'
import * as st from './inputfriend.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
import { useRouter } from 'next/navigation'
export default function WriteFriend() {
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()
  const handleSendClick = async () => {
    router.push(`/write/send?isSuccess=true`)

    // try {
    //   // Axios를 사용하여 데이터 요청을 수행
    //   const response = await axios.post('your-api-endpoint', data)
    //   // 성공한 경우 isSuccess 상태를 true로 업데이트
    //   setIsSuccess(true)
    // } catch (error) {
    //   // 실패한 경우 isSuccess 상태를 false로 업데이트
    //   setIsSuccess(false)
    // }
  }
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
          <st.SpaceImg src="/write/Solar System.svg" alt="Solar System" />

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
          </st.ContentBox>
          <stt.button onClick={handleSendClick}>전송</stt.button>
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
