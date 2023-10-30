import Link from 'next/link'
import GlobalStyle from '../GlobalStyles'
import * as r from './random.styled'
export default function Ramdon() {
  return (
    <>
      <GlobalStyle />
      <r.RandomPage className="flex h-screen flex-col">
        <r.BackBtnWrapper className="flex">
          <r.CustomImage
            className="m-2 h-7 w-7 object-contain"
            src="/icons/BackBtn.svg"
          />
        </r.BackBtnWrapper>

        <r.TitleWrapper>
          <r.CustomImage src="/icons/SolarSystem.svg" />
          <r.Title>랜덤메시지</r.Title>
        </r.TitleWrapper>

        <r.RandomCardContainer className="mt-4 h-screen w-full overflow-y-scroll ">
          <r.RandomCardWrapper className=" m-4 grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {/* card component start */}
            <Link href="/storage/random/{ID}">
              <r.Card className="group">
                {/* card state */}

                {/* end card state */}

                <r.CardImageWrapper className=" aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full group-hover:opacity-75">
                  <r.CardStateImage
                    className=" w-1/3 "
                    src="/icons/Check.svg"
                    alt="state"
                  />
                  <r.CustomImage
                    src="/icons/planets/Planet-1.svg"
                    alt="planet icon."
                    className=" h-full w-full object-cover object-center "
                  />
                </r.CardImageWrapper>
                <r.TitleWrapper>
                  <r.CardTitle>풍성한 크리링</r.CardTitle>
                  <r.CardUpdateDate>2023.10.12</r.CardUpdateDate>
                </r.TitleWrapper>
              </r.Card>
            </Link>
            {/* card component end */}
          </r.RandomCardWrapper>
        </r.RandomCardContainer>
      </r.RandomPage>
    </>
  )
}
