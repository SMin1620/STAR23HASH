import Link from "next/link";
import GlobalStyle from "./GlobalStyles";

export default function Storage() {
  return (
    <>
      <GlobalStyle />
      <div className="Title">요기는 스토리징~</div>
      <div>
        <Link href={"/storage/random"}>랜덤보관함으로 가깅</Link>
      </div>
      <div>
        <Link href={"/storage/friend"}>칭구보관함으로 가깅</Link>
      </div>
      <div>
        <Link href={"/"}>호무</Link>
      </div>
    </>
  );
}
