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
    setValue(`http://localhost:3000/today/storage/Link/${check.data.rollId}`)
    setShowLink(true)
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: '0',
        right: '0',
        bottom: '50px',
        textAlign: 'center',
      }}
    >
      <button onClick={click} style={{ color: 'white', fontSize: '20px' }}>
        롤링페이퍼 링크
      </button>
      {showLink && (
        <div>
          <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
            <span className=" text-white">{value}</span>
          </CopyToClipboard>
        </div>
      )}
      {copied ? <span style={{ color: 'red' }}>복사되었습니다!</span> : null}
    </div>
  )
}
