'use client'
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
  searchParams: {
    planetNumber: number
    senderName: string
  }
}

export default function History({ params, searchParams }: Props) {
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
        router.replace('/error')
      }
    }

    getRooms()
  }, [])

  return (
    <>
      <h.HistoryPage className="absolute h-screen w-screen">
        <BackButton />

        <h.TitleWrapper className="mb-6">
          <h.CustomImage
            src={`/icons/planets/Planet-${searchParams.planetNumber}.png`}
            className="h-40 w-40"
          />
          <h.Title>{searchParams.senderName}</h.Title>
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
                    isReply={note.isReply}
                  />
                ),
              )}

            {/* Letter component end */}
          </h.LetterLogWrapper>
        </h.LetterLogContainer>
      </h.HistoryPage>
    </>
  )
}
