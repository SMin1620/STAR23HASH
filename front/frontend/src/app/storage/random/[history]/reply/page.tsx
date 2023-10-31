'use client'

import { useRouter } from 'next/navigation'
import * as r from './reply.styled'

export default function Letter() {
  const router = useRouter()

  const handleSend = () => {
    // 전송
    router.replace(`/storage/random`)
  }
  const handleBackBtnClick = () => {
    router.back()
  }

  return (
    <>
      <r.LetterBoard className="absolute h-screen w-screen">
        <r.LetterContainer className="h-3/4 w-80 md:w-2/3 lg:w-2/3">
          <r.DecoBottonWrapper>
            <r.RedDecoBotton />
            <r.YellowDecoBotton />
            <r.GreenDecoBotton />
          </r.DecoBottonWrapper>

          <r.LetterReceived>
            <r.LetterHeader>
              <r.LetterName>From. 풍성한 크리링</r.LetterName>
              <r.LetterDate>2023.10.11</r.LetterDate>
            </r.LetterHeader>

            <r.LetterContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </r.LetterContent>
          </r.LetterReceived>

          <r.LetterInput />

          <r.WarningText>작성된 편지는 20:00에 일괄 전송됩니다.</r.WarningText>
          <r.ButtonWrapper>
            <r.Button onClick={handleBackBtnClick}>돌아가기</r.Button>
            <r.Button onClick={handleSend}>답장하기</r.Button>
          </r.ButtonWrapper>
        </r.LetterContainer>
      </r.LetterBoard>
    </>
  )
}
