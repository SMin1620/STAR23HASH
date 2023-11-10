import * as st from '../sendresult.styled'

export default function Fail() {
  return (
    <>
      <st.SendImg src="/write/Astronaut-3.png" alt="Solar System" />
      <st.SendText1>전송실패...</st.SendText1>
      <st.SendText2>전송 과정에서 문제가 발생했어요...</st.SendText2>
    </>
  )
}
