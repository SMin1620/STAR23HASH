'use client'
import * as st from '@/app/write/wfriend/input/inputfriend.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
import {
  AstronautContainer,
  AstronautImages,
  AstronautImg,
  Btn,
  BtnContainer,
  SendBox,
  AstronautBox,
  ContentLength,
} from './write.styled'
import { linkPost } from '@/app/utils/todayStorage/link/linkPost'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  params: {
    slug: number
  }
}

export default function LinkWrite({ params }: Props) {
  const [content, setContent] = useState('')
  const [icon, setIcon] = useState<number>(1)
  const [rollId, setRollId] = useState(params.slug)
  const [activeIcon, setActiveIcon] = useState(1)
  const router = useRouter()

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value
    setContent(inputValue)
  }

  const handleIcon = (iconId: number) => {
    setIcon(iconId)
    setActiveIcon(iconId)
  }

  const handleSendApi = async () => {
    const str = content.replace(/\s/g, '')
    if (str.length <= 1) {
      alert('한글자는 너무했지..?')
    } else if (content.length > 300) {
      alert('300자 이내로 작성해주세요! 😢 ')
    } else {
      try {
        const response = await linkPost(content, icon, rollId)
        const res = response.data.data
        // console.log(res)
        alert('전송이 완료되었습니다!')
        router.push(`/today/storage/Link/${params.slug}`)
      } catch (error) {
        console.error(error)
        alert('전송에 실패하였습니다.')
      }
    }
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <SendBox className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full">
          <stt.InnerCircle>
            <stt.InnerCircle1></stt.InnerCircle1>
            <stt.InnerCircle2></stt.InnerCircle2>
            <stt.InnerCircle3></stt.InnerCircle3>
          </stt.InnerCircle>
          <AstronautContainer>
            <AstronautImages>
              <AstronautBox
                className={activeIcon === 1 ? 'active' : ''}
                onClick={() => handleIcon(1)}
              >
                <AstronautImg
                  src="/link/Astronaut-1.png"
                  alt="Astronaut1"
                  onClick={() => handleIcon(1)}
                />
              </AstronautBox>
              <AstronautBox
                className={activeIcon === 2 ? 'active' : ''}
                onClick={() => handleIcon(2)}
              >
                <AstronautImg
                  src="/link/Astronaut-2.png"
                  alt="Astronaut2"
                  onClick={() => handleIcon(2)}
                />
              </AstronautBox>
              <AstronautBox
                className={activeIcon === 3 ? 'active' : ''}
                onClick={() => handleIcon(3)}
              >
                <AstronautImg
                  src="/link/Astronaut-4.png"
                  alt="Astronaut4"
                  onClick={() => handleIcon(3)}
                />
              </AstronautBox>
              <AstronautBox
                className={activeIcon === 4 ? 'active' : ''}
                onClick={() => handleIcon(4)}
              >
                <AstronautImg
                  src="/link/Astronaut-3.png"
                  alt="Astronaut3"
                  onClick={() => handleIcon(4)}
                />
              </AstronautBox>
            </AstronautImages>
          </AstronautContainer>
          <div className="mt-5">마음에 드는 아이콘을 골라보세요!</div>

          <st.ContentBox>
            <st.InputContent
              placeholder="내용을 입력하세요"
              value={content}
              onChange={handleContentChange}
            />
          </st.ContentBox>
          <ContentLength>{content.length} / 300 </ContentLength>
          <BtnContainer>
            <Btn
              onClick={() => {
                handleBack()
              }}
            >
              돌아가기
            </Btn>
            <Btn
              onClick={() => {
                handleSendApi()
              }}
            >
              전송하기
            </Btn>
          </BtnContainer>
        </SendBox>
      </div>
    </>
  )
}
