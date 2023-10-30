import Link from 'next/link'
import GlobalStyle from '../GlobalStyles'
import * as st from './sendresult.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
import Success from './component/success'
import Fail from './component/fail'
import { useSearchParams } from 'next/navigation'

type Props = {

  searchParams: {
    isSuccess: string
  }
}

export default function SendResult({  searchParams }: Props) {

  // if(searchParams.isSuccess){
  //   console.log('bool');
    
  // }
  // else{
  //   console.log(typeof(searchParams.isSuccess));
    
  // }

  return (
    <>
      <GlobalStyle />
      <stt.SendBoxDiv className="flex h-screen w-screen items-center justify-center">
        <stt.SendBox className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full">
          <stt.InnerCircle>
            <stt.InnerCircle1></stt.InnerCircle1>
            <stt.InnerCircle2></stt.InnerCircle2>
            <stt.InnerCircle3></stt.InnerCircle3>
          </stt.InnerCircle>
          {searchParams.isSuccess==="true"? 
            <>
              <st.ContentBox>
                <Success />
              </st.ContentBox>
              <Link href="/write">
                <stt.button>확인</stt.button>
              </Link>
            </>
           : 
            <>
              <st.ContentBox>
                <Fail />
              </st.ContentBox>
              <Link href="/write">
                <stt.button>돌아가기</stt.button>
              </Link>
            </>
          }
        </stt.SendBox>
      </stt.SendBoxDiv>
    </>
  )
}
