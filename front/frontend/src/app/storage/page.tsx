import Link from 'next/link'

import * as st from './storage.styled'
import TestButton from '@/component/storage/TestButton'
import PlanetCard from '@/component/storage/random/PlanetCard'

import Three from '@/component/Three/login'

export default function Storage() {
  return (
    <>
      <div className="absolute z-10">
        <st.TestText>
          <Link href={'/storage/random'}>랜덤보관함으로 가깅</Link>
        </st.TestText>
        <st.TestText>
          <Link href={'/storage/friend'}>칭구보관함으로 가깅</Link>
        </st.TestText>
        <st.TestText>
          <Link href={'/'}>호무</Link>
        </st.TestText>
      </div>
      {/* <Three style={{ position: 'absolute', width: '100%', height: '100%' }} /> */}
    </>
  )
}
