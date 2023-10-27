import Link from 'next/link'
import GlobalStyle from '../GlobalStyles'
import * as st from './wrandom.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'

export default function WriteRandom() {
  return (
    <>
      <GlobalStyle />
      <stt.SendBox>
        <stt.InnerCircle>
          <stt.InnerCircle1></stt.InnerCircle1>
          <stt.InnerCircle2></stt.InnerCircle2>
          <stt.InnerCircle3></stt.InnerCircle3>
        </stt.InnerCircle>
        <st.ContentBox></st.ContentBox>
      </stt.SendBox>
    </>
  )
}
