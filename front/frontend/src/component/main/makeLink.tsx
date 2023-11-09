'use client'
import React, { useState, useEffect, Suspense } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { MakeLinkAxios } from '@/app/utils/main/makeLinkAxios'

export default function MakeLink() {
  const [rollId, setRoolId] = useState()
  const [value, setValue] = useState('')
  const [copied, setCopied] = useState(false)
  const [showLink, setShowLink] = useState(false)

  async function click() {
    const check = await MakeLinkAxios()
    console.log('요기')
    console.log(check.data)
    setRoolId(check.data.rollId)
    setValue(
      `http://k9e106.p.ssafy.io:3000/today/storage/Link/${check.data.rollId}`,
    )
    setShowLink(true)
  }

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
      <button onClick={click} style={{ color: 'white', fontSize: '20px' }}>
        롤링페이퍼 링크
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
