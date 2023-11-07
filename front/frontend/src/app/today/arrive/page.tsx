'use client'
import { useState, useEffect } from 'react'
import Yes from '@/component/arrive/yes'
import No from '@/component/arrive/no'
import DeliveryThree from '../../../component/Three/delivery'
import BackButton from '@/component/storage/BackButton'
import Loading from './loading'
import { Translate } from 'aws-sdk'

export default function Arrive() {
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState(false)

  useEffect(() => {
    // 도착한 편지가 있는지 없는지 확인 (비동기)
    setTimeout(() => {
      setState(true) // 비동기 작업의 결과에 따라 state를 설정
      setLoading(false) // 비동기 작업이 끝났음
    }, 1000)
  }, [])

  useEffect(() => {
    // 도착한 편지 있는지 없는지 확인하는 로직
    setState(true)
  }, [])

  return (
    <div>
      <div className="flex items-center justify-center">
        <div
          className="absolute z-10"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="fixed left-0 top-0">
            <BackButton />
          </div>
          {loading ? <></> : state ? <Yes /> : <No />}
        </div>
      </div>
      <DeliveryThree
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
