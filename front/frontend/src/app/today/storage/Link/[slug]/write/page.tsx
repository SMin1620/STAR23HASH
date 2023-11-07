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

export default function LinkWrite() {
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
                <AstronautImg src="/link/Astronaut-1.png" alt="Astronaut1" />
              </AstronautBox>
              <AstronautBox>
                <AstronautImg src="/link/Astronaut-2.png" alt="Astronaut2" />
              </AstronautBox>
              <AstronautBox>
                <AstronautImg src="/link/Astronaut-3.png" alt="Astronaut3" />
              </AstronautBox>
              <AstronautBox>
                <AstronautImg src="/link/Astronaut-4.png" alt="Astronaut4" />
              </AstronautBox>
            </AstronautImages>
          </AstronautContainer>

          <st.ContentBox>
            <st.InputContent placeholder="내용을 입력하세요" />
          </st.ContentBox>
          <BtnContainer>
            <Btn>돌아가기</Btn>
            <Btn>전송하기</Btn>
          </BtnContainer>
        </SendBox>
      </div>
    </>
  )
}
