'use client'
import * as stt from '@/component/common/write_layout/write_layout.styled'
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
      <stt.SendBoxDiv className="flex h-screen w-screen items-center justify-center">
        <stt.SendBox className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full">
          <stt.InnerCircle>
            <stt.InnerCircle1></stt.InnerCircle1>
            <stt.InnerCircle2></stt.InnerCircle2>
            <stt.InnerCircle3></stt.InnerCircle3>
          </stt.InnerCircle>
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
