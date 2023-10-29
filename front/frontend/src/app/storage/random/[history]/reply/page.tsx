import Link from 'next/link'
import * as r from './reply.styled'
export default function Letter() {
  return (
    <>
      <r.LetterBoard className="grid h-screen place-items-center bg-[length:700px] bg-[left_top_15rem]">
        <r.LetterContainer className="grid   h-3/4 w-80 md:w-2/3 lg:w-2/3">
          <r.DecoBottonWrapper className="mb-4 self-start justify-self-start">
            <r.RedDecoBotton />
            <r.YellowDecoBotton />
            <r.GreenDecoBotton />
          </r.DecoBottonWrapper>

          <r.LetterReceived className=" mb-4 flex flex-col rounded-lg">
            <div className="flex flex-col justify-center">
              <r.LetterName>From. 풍성한 크리링</r.LetterName>
              <r.LetterDate>2023.10.11</r.LetterDate>
            </div>

            <r.LetterContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </r.LetterContent>
          </r.LetterReceived>
          <r.LetterInput className=" flex h-48 flex-col rounded-lg p-4" />

          {/* content input */}

          <r.WarningText className="mt-auto justify-self-center">
            작성된 편지는 20:00에 일괄 전송됩니다.
          </r.WarningText>
          <div className="mt-1 flex  flex-row justify-between ">
            <r.Button className="mt-auto">돌아가기</r.Button>
            <r.Button className="mt-auto">답장하기</r.Button>
          </div>
        </r.LetterContainer>
      </r.LetterBoard>
    </>
  )
}
