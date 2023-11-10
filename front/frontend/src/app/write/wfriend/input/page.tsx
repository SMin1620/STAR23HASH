'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import GlobalStyle from '../../GlobalStyles'
import * as st from './inputfriend.styled'
import * as stt from '@/component/common/write_layout/write_layout.styled'
import Modal from '@/component/write/modal'
import InputModal from '@/component/write/inputmodal'
import RepairModal from '@/component/write/repair'
import { useRouter, useSearchParams } from 'next/navigation'
import uuid from 'react-uuid'
import AWS from 'aws-sdk'
import { createLetter } from '@/app/utils/write/createLetter'

type Props = {
  searchParams: {
    phone: string
  }
}

export default function WriteFriend({ searchParams }: Props) {
  const [showModal, setShowModal] = useState(false)
  const [inputModal, setInputModal] = useState(false)
  const [content, setContent] = useState('')
  const [hint, setHint] = useState('')
  const [contentType, setContentType] = useState(3) //기본 text 타입으로 설정
  const [mediaUrl, setMediaUrl] = useState('')
  const [repairModal, setRepairModal] = useState(false)
  const [phone, setPhone] = useState(searchParams.phone)
  const router = useRouter()
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
    setHint(text)
    setShowModal(false)
    // 상위 컴포넌트에서 inputText를 처리하는 로직을 추가해주세요.
  }

  const repModal = () => {
    setRepairModal(true)
  }

  const closeModal = () => {
    setRepairModal(!repairModal)
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
    MediaSave(inputmedia)
    setInputModal(false)
    // 상위 컴포넌트에서 inputText를 처리하는 로직을 추가해주세요.
  }
  const closeInputModal = () => {
    setInputModal(false)
    setContentType(3)
    // 상위 컴포넌트에서 inputText를 처리하는 로직을 추가해주세요.
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value
    setContent(inputValue)
  }

  const handleSendClick = async () => {
    if (content === '') {
      alert('내용을 입력해주세요')
    } else {
      const res = await createLetter(
        content,
        contentType,
        mediaUrl,
        hint,
        phone,
      )
      if (res.status.toString() === 'OK') {
        router.replace(`/write/send?isSuccess=true`)
      } else {
        router.replace(`/write/send?isSuccess=false`)
      }
    }
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
          <st.SpaceImg src="/icons/SolarSystem.png" alt="Solar System" />

          <st.ContentBox>
            <st.InputContent
              placeholder="내용을 입력하세요"
              value={content}
              onChange={handleContentChange}
            ></st.InputContent>
            <st.Hint>
              <st.HintCheck
                type="checkbox"
                checked={hint !== ''}
                onChange={() => openModal()}
              />
              <st.HintCheckCustom />
              나에 대한 힌트 주기
            </st.Hint>
            <st.AddContent>
              <st.ContentInfoText>어떤걸 추가 해볼까?</st.ContentInfoText>
              <st.Medias onClick={repModal}>
                <st.Media
                  // onClick={voiceinput}
                  src="/write/voice.png"
                  alt="voice"
                  style={{
                    backgroundColor: contentType === 0 ? 'lightgray' : 'white',
                  }}
                ></st.Media>
                <st.Media
                  // onClick={videoinput}
                  src="/write/video.png"
                  alt="video"
                  style={{
                    backgroundColor: contentType === 1 ? 'lightgray' : 'white',
                  }}
                ></st.Media>
                <st.Media
                  // onClick={pictureinput}
                  src="/write/picture.png"
                  alt="picture"
                  style={{
                    backgroundColor: contentType === 2 ? 'lightgray' : 'white',
                  }}
                ></st.Media>
              </st.Medias>
            </st.AddContent>
          </st.ContentBox>
          <stt.EmptyDiv>
            <stt.button onClick={handleSendClick}>전송</stt.button>
          </stt.EmptyDiv>
        </stt.SendBox>
      </stt.SendBoxDiv>
      {showModal && <Modal hint={hint} closeState={handleInputText} />}
      {inputModal && (
        <InputModal
          contentType={contentType}
          contentUrl={handleInputMedia}
          closeState={closeInputModal}
        />
      )}
      {repairModal && <RepairModal onConfirm={closeModal} />}
    </>
  )
}
