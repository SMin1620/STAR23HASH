'use client'

import { useEffect, useState } from 'react'

import * as l from './letter.styled'
import { useRouter } from 'next/navigation'
import { Letter } from '@/app/types/storage/types'
import { getLetter } from '@/app/utils/storage/getLetter'

type Props = {
  params: {
    letter: number
  }
}

export default function Letter({ params }: Props) {
  // api요청 데이터 취득.
  const router = useRouter()
  const [letterInfo, setLetterInfo] = useState<Letter>()

  useEffect(() => {
    const getLetterInfo = async () => {
      try {
        const response = await getLetter(params.letter)
        setLetterInfo(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    getLetterInfo()
  }, [])

  const getFormattedDate = (fullDate: string): string => {
    const givenDate = new Date(fullDate)

    const formattedDate = givenDate.toISOString().split('T')[0]
    return formattedDate
  }

  const handleClick = () => {
    router.back()
  }

  return (
    <>
      <l.LetterBoard className="absolute h-screen w-screen">
        <l.LetterContainer className="w-80 md:w-2/3 lg:w-2/3">
          <l.DecoBottonWrapper>
            <l.RedDecoBotton />
            <l.YellowDecoBotton />
            <l.GreenDecoBotton />
          </l.DecoBottonWrapper>

          {/* other type image...sound..video.. */}
          {letterInfo?.type !== 3 ? (
            <l.MediaWrapper>
              {/* image */}
              <l.CustomImage
                className="aspect-auto"
                src="/icons/planets/Planet-1.svg"
              />
              {/* video */}
              {/* sound */}
            </l.MediaWrapper>
          ) : null}

          <l.LetterContent>
            {letterInfo?.content}

            <br />
            <br />
            <hr />
            <l.Date>
              {letterInfo?.createAt !== undefined
                ? getFormattedDate(letterInfo.createAt)
                : '날짜정보가 없습니다'}
            </l.Date>
            <l.Hint>힌트 : 123{letterInfo?.hintContent}</l.Hint>
          </l.LetterContent>
          <div></div>

          <l.CloseBotton onClick={handleClick}>닫기</l.CloseBotton>
        </l.LetterContainer>
      </l.LetterBoard>
    </>
  )
}
