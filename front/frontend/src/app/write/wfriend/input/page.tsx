'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import GlobalStyle from '../../GlobalStyles'
import * as st from './inputfriend.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
import Modal from '@/component/write/modal'
import InputModal from '@/component/write/inputmodal'
import { useRouter } from 'next/navigation'
import uuid from 'react-uuid'
import AWS from 'aws-sdk'
import { createLetter } from '@/app/utils/write/createLetter'
export default function WriteFriend() {
  const [showModal, setShowModal] = useState(false)
  const [inputModal, setInputModal] = useState(false)
  const [content, setContent] = useState('')
  const [hint, setHint] = useState('')
  const [contentType, setContentType] = useState(3) //기본 text 타입으로 설정
  const router = useRouter()
  const [mediaUrl, setMediaUrl] = useState('')
  const [phone, setPhone] = useState('')

  const ACCESS_KEY = process.env.NEXT_PUBLIC_AWS_S3_ACCESS_ID
  const SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_AWS_S3_ACCESS_PW
  const REGION = process.env.NEXT_PUBLIC_AWS_S3_REGION
  const BUCKET = process.env.NEXT_PUBLIC_AWS_S3_BUCKET || 'default-bucket-name'

  AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  })

  const myBucket = new AWS.S3({
    params: { Bucket: BUCKET },
    region: REGION,
  })

  const handleImageUrlFromS3 = async (key: string) => {
    const params = {
      Bucket: BUCKET,
      Key: key,
    }

    try {
      if (params.Key.includes(' ')) {
        const replaceFileName = params.Key.replace(/\s/g, '+')
        const imageUrl = `https://${BUCKET}.s3.ap-northeast-2.amazonaws.com/${replaceFileName}`
        return imageUrl
      } else {
        const imageUrl = `https://${BUCKET}.s3.ap-northeast-2.amazonaws.com/${params.Key}`
        return imageUrl
      }
    } catch (error) {
      console.log(error)
      return null
    }
  }

  const MediaSave = async (imageFile: File) => {
    if (!imageFile) {
      alert('미디어를 못찾았어요')
      return
    }
    try {
      const replaceFileName = imageFile.name.includes(' ')
        ? imageFile.name.replace(/\s/g, '')
        : imageFile.name

      const params = {
        ACL: 'public-read',
        Body: imageFile,
        Bucket: BUCKET,
        Key: uuid() + replaceFileName,
      }

      try {
        const _temp = await myBucket.putObject(params).promise()
        const S3Url = await handleImageUrlFromS3(params.Key)
        if (S3Url !== null) {
          setMediaUrl(S3Url)
          console.log('mediaUrl', S3Url)
        }
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  function openModal() {
    setShowModal(true)
  }

  const handleInputText = (text: string) => {
    console.log('Input Text from Modal:', text)
    setHint(text)
    setShowModal(false)
    // 상위 컴포넌트에서 inputText를 처리하는 로직을 추가해주세요.
  }

  const voiceinput = () => {
    setContentType(0)
    setInputModal(true)
  }
  const videoinput = () => {
    setContentType(1)
    setInputModal(true)
  }
  const pictureinput = () => {
    setContentType(2)
    setInputModal(true)
  }

  const handleInputMedia = (inputmedia: File) => {
    console.log('medialink', inputmedia)
    MediaSave(inputmedia)
    setInputModal(false)
    // 상위 컴포넌트에서 inputText를 처리하는 로직을 추가해주세요.
  }
  const closeInputModal = () => {
    setInputModal(false)
    // 상위 컴포넌트에서 inputText를 처리하는 로직을 추가해주세요.
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value
    setContent(inputValue)
  }

  const handleSendClick = async () => {
    let type: string = 'text'
    switch (contentType) {
      case 0:
        type = 'audio'
        break
      case 1:
        type = 'movie'
        break
      case 2:
        type = 'picture'
        break
      default:
        break
    }

    const res = createLetter(content, type, mediaUrl, hint, phone)
    console.log(res)

    //router.push(`/write/send?isSuccess=true`)
  }
  return (
    <>
      <GlobalStyle />
      <stt.SendBoxDiv className="flex h-screen w-screen items-center justify-center">
        <stt.SendBox className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full">
          <stt.InnerCircle>
            <stt.InnerCircle1></stt.InnerCircle1>
            <stt.InnerCircle2></stt.InnerCircle2>
            <stt.InnerCircle3></stt.InnerCircle3>
          </stt.InnerCircle>
          <st.SpaceImg src="/write/Solar System.svg" alt="Solar System" />

          <st.ContentBox>
            <st.InputContent
              placeholder="내용을 입력하세요"
              value={content}
              onChange={handleContentChange}
            ></st.InputContent>
            <st.Hint>
              <st.HintCheck
                type="checkbox"
                checked={showModal}
                onChange={() => openModal()}
              />
              <st.HintCheckCustom />
              나에 대한 힌트 주기
            </st.Hint>
            <st.AddContent>
              <st.ContentInfoText>어떤걸 추가 해볼까?</st.ContentInfoText>
              <st.Medias>
                <st.Media
                  onClick={voiceinput}
                  src="/write/voice.svg"
                  alt="voice"
                ></st.Media>
                <st.Media
                  onClick={videoinput}
                  src="/write/video.svg"
                  alt="video"
                ></st.Media>
                <st.Media
                  onClick={pictureinput}
                  src="/write/picture.svg"
                  alt="picture"
                ></st.Media>
              </st.Medias>
            </st.AddContent>
          </st.ContentBox>
          <stt.EmptyDiv>
            <stt.button onClick={handleSendClick}>전송</stt.button>
          </stt.EmptyDiv>
        </stt.SendBox>
      </stt.SendBoxDiv>
      {showModal && <Modal onConfirm={handleInputText} />}
      {inputModal && (
        <InputModal
          contentType={contentType}
          contentUrl={handleInputMedia}
          closeState={closeInputModal}
        />
      )}
    </>
  )
}
