import Link from 'next/link'
import GlobalStyle from '../GlobalStyles'
import * as r from './random.styled'
export default function Ramdon() {
  return (
    <>
      <GlobalStyle />
      <div className="flex flex-col">
        <r.BackBtnWrapper className="flex flex-row-reverse">
          <r.CustonImage
            className="m-2 h-7 w-7 object-contain"
            src="/icons/BackBtn.svg"
          />
        </r.BackBtnWrapper>
        <r.RandomMainTitle>
          <r.CustonImage src="/icons/SolarSystem.svg" />
          <p className="text-lg font-bold text-white">랜덤메시지</p>
        </r.RandomMainTitle>

        <r.RandomCardWrapper className=" m-4 grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          <Link href="/storage/random/history" className="min-w- group">
            <div className=" aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
              <r.CustonImage
                src="/icons/planets/Planet-1.svg"
                alt="planet icon."
                className=" h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="mt-4 text-base font-bold text-white">
                풍성한 크리링
              </h4>
              <p className="mt-1 text-sm font-medium text-gray-400">
                2023.10.12
              </p>
            </div>
          </Link>

          {/* dummy */}
          <>
            <a href="#" className="group">
              <div className="aspect-h-2 aspect-w-2 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
                <r.CustonImage
                  src="/icons/planets/Planet-2.svg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex flex-col items-center">
                <h4 className="mt-4 text-base font-bold text-white">
                  풍성한 크리링
                </h4>
                <p className="mt-1 text-sm font-medium text-gray-400">
                  2023.10.12
                </p>
              </div>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-2 aspect-w-2 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
                <r.CustonImage
                  src="/icons/planets/Planet-3.svg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex flex-col items-center">
                <h4 className="mt-4 text-base font-bold text-white">
                  풍성한 크리링
                </h4>
                <p className="mt-1 text-sm font-medium text-gray-400">
                  2023.10.12
                </p>
              </div>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-2 aspect-w-2 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
                <r.CustonImage
                  src="/icons/planets/Planet-3.svg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex flex-col items-center">
                <h4 className="mt-4 text-base font-bold text-white">
                  풍성한 크리링
                </h4>
                <p className="mt-1 text-sm font-medium text-gray-400">
                  2023.10.12
                </p>
              </div>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-2 aspect-w-2 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
                <r.CustonImage
                  src="/icons/planets/Planet-3.svg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex flex-col items-center">
                <h4 className="mt-4 text-base font-bold text-white">
                  풍성한 크리링
                </h4>
                <p className="mt-1 text-sm font-medium text-gray-400">
                  2023.10.12
                </p>
              </div>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-2 aspect-w-2 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
                <r.CustonImage
                  src="/icons/planets/Planet-3.svg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex flex-col items-center">
                <h4 className="mt-4 text-base font-bold text-white">
                  풍성한 크리링
                </h4>
                <p className="mt-1 text-sm font-medium text-gray-400">
                  2023.10.12
                </p>
              </div>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-2 aspect-w-2 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
                <r.CustonImage
                  src="/icons/planets/Planet-3.svg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex flex-col items-center">
                <h4 className="mt-4 text-base font-bold text-white">
                  풍성한 크리링
                </h4>
                <p className="mt-1 text-sm font-medium text-gray-400">
                  2023.10.12
                </p>
              </div>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-2 aspect-w-2 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
                <r.CustonImage
                  src="/icons/planets/Planet-3.svg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex flex-col items-center">
                <h4 className="mt-4 text-base font-bold text-white">
                  풍성한 크리링
                </h4>
                <p className="mt-1 text-sm font-medium text-gray-400">
                  2023.10.12
                </p>
              </div>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-2 aspect-w-2 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
                <r.CustonImage
                  src="/icons/planets/Planet-3.svg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex flex-col items-center">
                <h4 className="mt-4 text-base font-bold text-white">
                  풍성한 크리링
                </h4>
                <p className="mt-1 text-sm font-medium text-gray-400">
                  2023.10.12
                </p>
              </div>
            </a>
          </>
        </r.RandomCardWrapper>

        <div>
          <Link href={'/storage/random'}>랜덤보관함으로 가깅</Link>
        </div>
        <div>
          <Link href={'/storage/friend'}>칭구보관함으로 가깅</Link>
        </div>
        <div>
          <Link href={'/'}>호무</Link>
        </div>
        <r.TestDiv>에러나오지마랑</r.TestDiv>
      </div>
    </>
  )
}
