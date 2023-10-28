import Link from 'next/link'
import GlobalStyle from '../../GlobalStyles'
import * as h from './history.styled'

export default function Letter() {
  return (
    <>
      <GlobalStyle />
      <div className="flex h-screen flex-col ">
        <h.BackBtnWrapper className="flex flex-row-reverse">
          <h.CustonImage
            className="m-2 h-7 w-7 object-contain"
            src="/icons/BackBtn.svg"
          />
        </h.BackBtnWrapper>
        <h.RandomMainTitle className="mb-6">
          <h.CustonImage
            src="/icons/planets/Planet-1.svg"
            className="h-40 w-40"
          />
          <p className="text-lg font-bold text-white">풍성한 크리링</p>
        </h.RandomMainTitle>

        <h.LetterLogWrapper className="h-screen w-full overflow-y-scroll ">
          <ul role="list" className="space-y-4 pt-6  text-gray-700">
            <h.LetterReceived className=" ml-4 mr-4 flex flex-col rounded-lg p-4">
              <div className="flex flex-col justify-center">
                <h.LetterName>풍성한 크리링</h.LetterName>
                <h.LetterDate>2023.10.11</h.LetterDate>
              </div>

              <h.NewLetterImage className="w-12" src="/icons/ShowAllBtn.svg" />

              <h.LetterContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </h.LetterContent>
            </h.LetterReceived>

            <h.LetterSent className=" ml-4 mr-4 flex flex-col rounded-lg p-4">
              <div className="flex flex-col items-end justify-center">
                <h.LetterName>풍성한 크리링</h.LetterName>
                <h.LetterDate>2023.10.11</h.LetterDate>
              </div>
              <h.LetterContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </h.LetterContent>
            </h.LetterSent>
          </ul>
        </h.LetterLogWrapper>
      </div>
    </>
  )
}
