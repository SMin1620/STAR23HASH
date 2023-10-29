import Link from 'next/link'
import * as l from './letter.styled'
export default function Letter() {
  return (
    <>
      <l.LetterBoard className="grid h-screen place-items-center bg-[length:700px] bg-[left_top_15rem]">
        <l.LetterContainer className="grid  w-80 md:w-2/3 lg:w-2/3">
          <l.DecoBottonWrapper className="mb-4 self-start justify-self-start">
            <l.RedDecoBotton />
            <l.YellowDecoBotton />
            <l.GreenDecoBotton />
          </l.DecoBottonWrapper>
          {/* other type image...sound..video.. */}
          <l.MediaWrapper>
            {/* image */}
            <l.CustonImage
              className="aspect-auto"
              src="/icons/planets/Planet-1.svg"
            />
            {/* video */}
            {/* sound */}
          </l.MediaWrapper>
          {/* content input */}
          <l.LetterContentWrapper className=" flex h-fit flex-col rounded-lg p-4">
            <l.LetterContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </l.LetterContent>
          </l.LetterContentWrapper>
          <l.CloseBotton className="mt-4 self-end justify-self-end">
            닫기
          </l.CloseBotton>
        </l.LetterContainer>
      </l.LetterBoard>
    </>
  )
}
