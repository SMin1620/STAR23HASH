import Link from 'next/link'
import GlobalStyle from './GlobalStyles'

import * as st from './storage.styled'

export default function Storage() {
  return (
    <>
      <GlobalStyle />
      <div className="Title">요기는 스토리징~</div>
      <st.TestText>
        <Link href={'/storage/random'}>랜덤보관함으로 가깅</Link>
      </st.TestText>
      <st.TestText>
        <Link href={'/storage/friend'}>칭구보관함으로 가깅</Link>
      </st.TestText>

      <st.TestText>
        <Link href={'/'}>호무</Link>
      </st.TestText>

      <st.FriendNavBox>
        <st.FriendTitle>친구</st.FriendTitle>
      </st.FriendNavBox>

      <st.RandomNavBox>
        <st.RandomTitle>랜덤</st.RandomTitle>
      </st.RandomNavBox>
    </>
  )
}
