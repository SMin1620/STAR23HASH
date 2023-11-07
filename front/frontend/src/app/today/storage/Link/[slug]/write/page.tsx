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
} from './write.styled'
import { linkPost } from '@/app/utils/todayStorage/link/linkPost'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import styled from 'styled-components'

// export const Wbutton = styled.button`
//   box-shadow: 0px 4px 2px
//     rgba(113.9000129699707, 97.38451838493347, 98.1026342511177, 1);
//   background-color: #947d7e;
//   width: 80%;
//   margin-bottom: 20px;
//   height: 45px;
//   border-radius: 20px;
//   color: white;
//   font-size: 16px;
//   font-weight: bold;
// `

// import {
//   InnerCircle,
//   InnerCircle1,
//   InnerCircle2,
//   InnerCircle3,
//   SendBox,
//   SendBoxDiv,
// } from '@/component/common/write_layout/write_layout.styled'

type Props = {
  params: {
    slug: number
  }
}

export default function LinkWrite({ params }: Props) {
  const [content, setContent] = useState('')
  const [icon, setIcon] = useState(0)
  const [rollId, setRollId] = useState(params.slug)
  const router = useRouter()

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value
    setContent(inputValue)
  }

  const handleIcon = (iconId: number) => {
    setIcon(iconId)
  }

  const handleSendApi = async () => {
    const response = await linkPost(content, icon, rollId)
    const res = response.data.data
    console.log(res)
    // if (res.status.toString() === 'OK') {
    //   router.push(`/write/send?isSuccess=true`)
    // } else {
    //   router.push(`/write/send?isSuccess=false`)
    // }
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
              <AstronautBox>
                <AstronautImg
                  src="/link/Astronaut-1.png"
                  alt="Astronaut1"
                  onClick={() => handleIcon(1)}
                />
              </AstronautBox>
              <AstronautBox>
                <AstronautImg
                  src="/link/Astronaut-2.png"
                  alt="Astronaut2"
                  onClick={() => handleIcon(2)}
                />
              </AstronautBox>
              <AstronautBox>
                <AstronautImg
                  src="/link/Astronaut-3.png"
                  alt="Astronaut3"
                  onClick={() => handleIcon(3)}
                />
              </AstronautBox>
              <AstronautBox>
                <AstronautImg
                  src="/link/Astronaut-4.png"
                  alt="Astronaut4"
                  onClick={() => handleIcon(4)}
                />
              </AstronautBox>
            </AstronautImages>
          </AstronautContainer>

          <st.ContentBox>
            <st.InputContent
              placeholder="내용을 입력하세요"
              value={content}
              onChange={handleContentChange}
            />
          </st.ContentBox>
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
