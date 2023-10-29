import Link from 'next/link'
import * as l from './letter.styled'
export default function Letter() {
  return (
    <>
      <l.LetterBoard className="grid h-screen place-items-center bg-[length:700px] bg-[left_top_15rem]">
        <l.LetterContainer className="w-80 md:w-2/3 lg:w-2/3">
          <l.DecoBottonWrapper>
            <l.RedDecoBotton />
            <l.YellowDecoBotton />
            <l.GreenDecoBotton />
          </l.DecoBottonWrapper>
          {/* content input */}

          <l.CloseBotton>닫기</l.CloseBotton>
        </l.LetterContainer>
      </l.LetterBoard>
    </>
  )
}
