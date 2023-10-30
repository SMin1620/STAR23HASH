import Link from 'next/link'

import * as st from './storage.styled'
import TestButton from '@/component/storage/TestButton'

export default function Storage() {
  return (
    <>
      <st.TestText>
        <Link href={'/storage/random'}>랜덤보관함으로 가깅</Link>
      </st.TestText>
      <st.TestText>
        <Link href={'/storage/friend'}>칭구보관함으로 가깅</Link>
      </st.TestText>
      <st.TestText>
        <Link href={'/'}>호무</Link>
      </st.TestText>

      <TestButton text="hello" />
    </>
  )
}
