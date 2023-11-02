import TestPlanet from '@/component/Three/testPlanet'
import IdChkButton from './IdChkButton'
import LoginButton from './LoginButton'
import * as st from './storage.styled'

import { getDataTest } from '@/app/utils/storage/getDataTest'
import TestPlanetCard from './testcomponent/TestPlanetCard'

export default async function Test() {
  const test = await getDataTest()

  return (
    <>
      <div className="absolute z-10 grid h-screen w-screen items-center justify-center">
        <st.TestBoard className=" h-96  w-fit items-center justify-center overflow-y-scroll">
          <TestPlanetCard
            id={1}
            planetNumber={1}
            name="김감자"
            date="2020.02.02"
            state="written"
          />

          <TestPlanet />
          <span>Axios Test</span>
          <hr />
          {test.map((it) => (
            <>
              <span key={it.id}>
                {it.id}. {it.title}
              </span>
              <hr />
            </>
          ))}
          <div className="flex flex-row">
            <LoginButton />
            <IdChkButton />
          </div>
        </st.TestBoard>
      </div>
    </>
  )
}
