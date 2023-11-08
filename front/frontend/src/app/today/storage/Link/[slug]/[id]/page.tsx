'use client'
import * as st from '@/app/write/wfriend/input/inputfriend.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
import {
  AstronautContainer,
  Btn,
  BtnContainer,
  SendBox,
  SendBoxDiv,
  Content,
  ContentBox,
} from './read.styled'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LinkDetailGet } from '@/app/utils/todayStorage/link/linkDetailGet'
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
    id: number
  }
}

export default function LinkRead({ params }: Props) {
  const [rollDetail, setRollDetail] = useState<null | any>(null)
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  useEffect(() => {
    const handleDetailApi = async (id: number) => {
      const response = await LinkDetailGet(id)
      console.log(response.data.data)

      setRollDetail(response.data.data)
    }
    handleDetailApi(params.id)
  }, [])

  useEffect(() => {
    // setContent(rollDetail.content)
    console.log(rollDetail, 'roll')
  }, [rollDetail])
  return (
    <SendBoxDiv>
      {/* <div className="flex h-screen w-screen items-center justify-center"> */}
      <SendBox className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full">
        <stt.InnerCircle>
          <stt.InnerCircle1></stt.InnerCircle1>
          <stt.InnerCircle2></stt.InnerCircle2>
          <stt.InnerCircle3></stt.InnerCircle3>
        </stt.InnerCircle>
        <AstronautContainer></AstronautContainer>

        <ContentBox>
          <Content>{rollDetail && rollDetail.content}</Content>
        </ContentBox>
        <BtnContainer>
          <Btn
            onClick={() => {
              handleBack()
            }}
          >
            돌아가기
          </Btn>
        </BtnContainer>
      </SendBox>
      {/* </div> */}
    </SendBoxDiv>
  )
}
