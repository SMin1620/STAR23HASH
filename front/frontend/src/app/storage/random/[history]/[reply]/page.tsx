'use client'

import { useRouter } from 'next/navigation'
import * as r from './reply.styled'
import { useEffect, useState } from 'react'
import { Note } from '@/app/types/storage/types'
import { getNote } from '@/app/utils/storage/getNote'
import { replyNote } from '@/app/utils/storage/replyNote'

type Props = {
  params: {
    history: number
    reply: number
  }
}

export default function Letter({ params }: Props) {
  const router = useRouter()
  const [noteInfo, setNoteInfo] = useState<Note>()
  const [content, setContent] = useState<string>()

  const [contentLength, setContentLength] = useState<number>(0)
  useEffect(() => {
    const getRooms = async () => {
      try {
        const response = await getNote(params.reply)
        setNoteInfo(response.data)
      } catch (error) {
        // router.replace('/error')
      }
    }

    getRooms()
  }, [])

  const handleSend = async () => {
    try {
      await replyNote(
        params.history,
        content ? content : '아무말도 답장안했답니다~',
      )
      router.replace(`/storage/random`)
    } catch (error) {
      alert('헉.. 전송실패')
    }
  }
  const handleBackBtnClick = () => {
    router.back()
  }

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value
    setContent(inputValue)
    if (content && content.length >= 300) {
      // alert('내용은 300자 이내로 작성해주세요.')
      setContent(inputValue.substring(0, 299))
    }
    setContentLength(inputValue.length)
  }
  return (
    <>
      <r.LetterBoard className="absolute h-screen w-screen ">
        <r.LetterContainer className=" h-3/4  md:w-2/3 lg:w-2/3">
          <r.DecoBottonWrapper>
            <r.RedDecoBotton />
            <r.YellowDecoBotton />
            <r.GreenDecoBotton />
          </r.DecoBottonWrapper>

          <r.LetterReceived>
            <r.LetterHeader>
              <r.LetterName>From. {noteInfo?.senderName}</r.LetterName>
              <r.LetterDate>{noteInfo?.createdAt}</r.LetterDate>
            </r.LetterHeader>

            <r.LetterContent>{noteInfo?.content}</r.LetterContent>
          </r.LetterReceived>

          <r.LetterInput
            placeholder="답장을 적어볼까요??"
            value={content}
            onChange={handleContent}
          />
          <r.ContentLimit
            className={contentLength >= 300 ? `text-red-500` : `text-gray-400`}
          >
            {contentLength}/300
          </r.ContentLimit>
          <r.WarningText>작성된 편지는 17:00에 일괄 전송됩니다.</r.WarningText>
          <r.ButtonWrapper>
            <r.Button onClick={handleBackBtnClick}>돌아가기</r.Button>
            <r.Button onClick={handleSend}>답장하기</r.Button>
          </r.ButtonWrapper>
        </r.LetterContainer>
      </r.LetterBoard>
    </>
  )
}
