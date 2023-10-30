import Link from 'next/link'

import * as st from './storage.styled'
import TestButton from '@/component/storage/TestButton'
import PlanetCard from '@/component/storage/random/PlanetCard'

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
      <PlanetCard
        id={1}
        planetNumber={1}
        name="김감자"
        date="2020.02.02"
        state="written"
      />
    </>
  )
}
