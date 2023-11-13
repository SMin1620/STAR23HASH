'use client'
import React, { useState, useEffect, Suspense } from 'react'
import { MakeLinkAxios } from '@/app/utils/main/makeLinkAxios'

export default function MakeLink() {
  const [rollId, setRoolId] = useState()
  const [value, setValue] = useState('')
  const [copied, setCopied] = useState(false)
  const [showLink, setShowLink] = useState(false)

  async function click() {
    const check = await MakeLinkAxios()
    // console.log('요기')
    // console.log(check.data)
    // setRoolId(check.data.rollId)
    // setValue(`http://k9e106.p.ssafy.io/today/storage/Link/${check.data.rollId}`)
    setShowLink(true)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const check = await MakeLinkAxios()
        setRoolId(check.data.rollId)
        setValue(
          `http://k9e106.p.ssafy.io/today/storage/Link/${check.data.rollId}`,
        )
      } catch (error) {
        console.error('Failed to fetch data: ', error)
      }
    }
    fetchData()
    console.log(value)
  }, [])

  // 현재 페이지 URL 저장, 이는 공유 버튼 클릭시 열리는 페이지의 주소로 사용됨
  const shareUrl = value
  // useEffect를 이용하여 컴포넌트 렌더링시 카카오 SDK 초기화 및 공유 버튼 생성
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Kakao) {
      const { Kakao } = window
      if (!Kakao.isInitialized()) {
        // SDK 초기화 부분, 본인의 API_KEY 입력
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY)
      }
      Kakao.Link.createDefaultButton({
        // #kakao-link-btn id를 가진 요소에 공유 버튼을 생성하도록 함
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '별이삼샵',
          description: '나에게 메시지를 적어줄래요?',
          imageUrl:
            'https://star23shop-bucket.s3.ap-northeast-2.amazonaws.com/Group+48.png',
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: '메시지 남기러가기',
            link: {
              webUrl: shareUrl,
              mobileWebUrl: shareUrl,
            },
          },
        ],
      })
    }
  }, [shareUrl])

  async function clickLink() {
    const t = document.createElement('textarea')
    document.body.appendChild(t)
    t.value = value
    t.select()
    document.execCommand('copy')
    document.body.removeChild(t)

    alert('링크가 복사되었습니다!')
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: '0',
        right: '0',
        bottom: '30px',
        textAlign: 'center',
      }}
    >
      <div id="kakao-link-btn">
        <button style={{ color: 'white', fontSize: '20px' }}>
          카카오톡 공유하기
        </button>
      </div>
      <button onClick={click} style={{ color: 'white', fontSize: '20px' }}>
        롤링페이퍼 링크보기
      </button>
      {showLink && (
        <div>
          <span onClick={clickLink} className=" text-white">
            {value}
          </span>
          <div className=" text-white" style={{ fontSize: '12px' }}>
            링크를 클릭하면 복사됩니당
          </div>
        </div>
      )}
      {copied ? <span style={{ color: 'red' }}>복사되었습니다!</span> : null}
    </div>
  )
}
