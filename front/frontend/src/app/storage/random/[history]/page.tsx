'use client'
import Link from 'next/link'
import * as h from './history.styled'
import BackButton from '@/component/storage/BackButton'
import ReceivedLetter from '@/component/storage/random/ReceivedLetter'
import SentLetter from '@/component/storage/random/SentLetter'
import { getNotes } from '@/app/utils/storage/getNotes'
import { useEffect, useState } from 'react'
import { Note } from '@/app/types/storage/types'
import { useRouter } from 'next/navigation'

type Props = {
  params: {
    history: number
  }
}

export default function History({ params }: Props) {
  const router = useRouter()
  const [notes, setNotes] = useState<Note[]>()

  useEffect(() => {
    const getRooms = async () => {
      try {
        const response = await getNotes(params.history)
        setNotes(response.data)
        console.log('randomRooms : ', response.data)
      } catch (error) {
        console.error('Error fetching random rooms:', error)
      }
    }

    getRooms()
  }, [])

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

            {notes &&
              notes.map((note) =>
                note.send ? (
                  <SentLetter
                    key={note.id}
                    id={note.id}
                    name={note.senderName}
                    date={note.createdAt}
                    content={note.content}
                  />
                ) : (
                  <ReceivedLetter
                    key={note.id}
                    historyId={params.history}
                    noteId={note.id}
                    name={note.senderName}
                    date={note.createdAt}
                    content={note.content}
                    isNew={note.isRead}
                  />
                ),
              )}

            {/* <ReceivedLetter
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
            /> */}
            {/* Letter component end */}
          </h.LetterLogWrapper>
        </h.LetterLogContainer>
      </h.HistoryPage>
    </>
  )
}
