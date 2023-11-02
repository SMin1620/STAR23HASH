'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import GlobalStyle from '../GlobalStyles'
import * as st from './wrandom.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
export default function WriteFriend() {
  const router = useRouter()
  const handleSend = async () => {
    // try {
    //   // Axios를 사용하여 데이터 요청을 수행
    //   const response = await axios.post('your-api-endpoint', data)
    //   // 성공한 경우 isSuccess 상태를 true로 업데이트
    //   setIsSuccess(true)
    // } catch (error) {
    //   // 실패한 경우 isSuccess 상태를 false로 업데이트
    //   setIsSuccess(false)
    // }
    router.push(`/write/send?isSuccess=true`)
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
          <st.SpaceImg src="/write/Rocket-2.svg" alt="Solar System" />

          <st.ContentBox>
            <st.InputContent></st.InputContent>
          </st.ContentBox>
          <stt.EmptyDiv>
            <stt.button onClick={handleSend}>전송</stt.button>
          </stt.EmptyDiv>
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
