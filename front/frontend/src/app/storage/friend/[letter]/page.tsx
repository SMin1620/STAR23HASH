import Link from 'next/link'
import * as l from './letter.styled'
export default function Letter() {
  return (
    <>
      <l.LetterBoard className="h-screen bg-[length:700px] bg-[left_top_15rem]">
        <l.LetterContainer className="w-80 md:w-2/3 lg:w-2/3">
          <l.DecoBottonWrapper>
            <l.RedDecoBotton />
            <l.YellowDecoBotton />
            <l.GreenDecoBotton />
          </l.DecoBottonWrapper>

          {/* other type image...sound..video.. */}
          <l.MediaWrapper>
            {/* image */}
            <l.CustomImage
              className="aspect-auto"
              src="/icons/planets/Planet-1.svg"
            />
            {/* video */}
            {/* sound */}
          </l.MediaWrapper>

          <l.LetterContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </l.LetterContent>

          <l.CloseBotton>닫기</l.CloseBotton>
        </l.LetterContainer>
      </l.LetterBoard>
    </>
  )
}
