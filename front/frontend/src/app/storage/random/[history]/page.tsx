import Link from 'next/link'
import * as h from './history.styled'
import BackButton from '@/component/storage/BackButton'

export default function History() {
  return (
    <>
      <h.HistoryPage className="absolute h-screen w-screen">
        <BackButton />

        <h.TitleWrapper className="mb-6">
          <h.CustomImage
            src="/icons/planets/Planet-1.svg"
            className="h-40 w-40"
          />
          <h.Title>풍성한 크리링</h.Title>
        </h.TitleWrapper>

        <h.LetterLogContainer className="h-screen ">
          <h.LetterLogWrapper role="list" className="space-y-4">
            <h.LetterReceived>
              <Link href={`/storage/random/{ID}/reply`}>
                <h.IsNewLetterImage
                  className="w-12"
                  src="/icons/ShowAllBtn.svg"
                />
              </Link>

              <h.LetterHeader>
                <h.LetterName>풍성한 크리링</h.LetterName>
                <h.LetterDate>2023.10.11</h.LetterDate>
              </h.LetterHeader>

              <h.LetterContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </h.LetterContent>
            </h.LetterReceived>

            <h.LetterSent>
              <h.LetterHeader className="items-end">
                <h.LetterName>풍성한 크리링</h.LetterName>
                <h.LetterDate>2023.10.11</h.LetterDate>
              </h.LetterHeader>
              <h.LetterContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </h.LetterContent>
            </h.LetterSent>
          </h.LetterLogWrapper>
        </h.LetterLogContainer>
      </h.HistoryPage>
    </>
  )
}
