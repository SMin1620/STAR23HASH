import Link from 'next/link'
import * as h from './history.styled'
import BackButton from '@/component/storage/BackButton'
import ReceivedLetter from '@/component/storage/random/ReceivedLetter'
import SentLetter from '@/component/storage/random/SentLetter'

type Props = {
  roomid: number
}

export default async function History({ roomid }: Props) {
  console.log('roomid is : ' + roomid)

  const content: string =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.'

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
            {/* Letter component */}
            <ReceivedLetter
              id={2}
              name="풍성한 크리링"
              date="2023.10.11"
              content={content}
              isNew={true}
            />

            <SentLetter
              id={1}
              name="풍성한 크리링"
              date="2023.10.11"
              content={content}
            />
            {/* Letter component end */}
          </h.LetterLogWrapper>
        </h.LetterLogContainer>
      </h.HistoryPage>
    </>
  )
}
