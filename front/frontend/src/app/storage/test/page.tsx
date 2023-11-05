import TestPlanet from '@/component/Three/testPlanet'
import IdChkButton from './IdChkButton'
import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'
import * as st from './storage.styled'

import { getDataTest } from '@/app/utils/storage/getDataTest'
import TestPlanetCard from './testcomponent/TestPlanetCard'
import userTest from '@/app/utils/storage/userTest'

export default async function Test() {
  const test = await getDataTest()
  // const test2 = await userTest()
  // console.log(test2)

  return (
    <>
      <div className="absolute z-10 grid h-screen w-screen items-center justify-center">
        <st.TestBoard className=" h-96  w-fit items-center justify-center overflow-y-scroll">
          <div className="flex flex-row">
            <LoginButton />
            <RegisterButton />
            <IdChkButton />
          </div>
          {/* <TestPlanetCard
            id={1}
            planetNumber={1}
            name="김감자"
            date="2020.02.02"
            state="written"
          /> */}

          {/* <TestPlanet planetNum={1} />
          <TestPlanet planetNum={2} />
          <TestPlanet planetNum={3} />
          <TestPlanet planetNum={4} />
          <TestPlanet planetNum={5} />
          <TestPlanet planetNum={6} /> */}

          <span>Axios Test</span>
          <hr />
          {/* {test.map((it) => (
            <>
              <span key={it.id}>
                {it.id}. {it.title}
              </span>
              <hr />
            </>
          ))} */}
        </st.TestBoard>
      </div>
    </>
  )
}
