import Link from "next/link";
import GlobalStyle from "./GlobalStyles"

import FriendBtn from '@/component/icons/FriendStorageBtn.svg'
import RandonBtn from '@/component/icons/RandomStorageBtn.svg'
import * as st from "./storage.styled"

export default function Storage() {
  return (
    <>
      <GlobalStyle />
      <div className="Title">요기는 스토리징~</div>
      <st.TestText>
        <Link href={"/storage/random"}>랜덤보관함으로 가깅</Link>
      </st.TestText>
      <st.TestText>
        <Link href={"/storage/friend"}>칭구보관함으로 가깅</Link>
      </st.TestText>
      <st.TestText>
        <Link href={"/"}>호무</Link>
      </st.TestText>
      <st.NavigationBox>
        <st.FriendTitle>친구</st.FriendTitle>
      <FriendBtn width={"100%"} height={"100%"}/>
      </st.NavigationBox>
      <st.NavigationBox>
        <st.RandomTitle>랜덤</st.RandomTitle>
      <RandonBtn width={"100%"} height={"100%"}/>
      </st.NavigationBox>
    </>
  );
}
