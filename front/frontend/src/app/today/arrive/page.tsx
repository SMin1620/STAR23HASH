'use client'
import { useState, useEffect } from 'react'
import Yes from '@/component/arrive/yes'
import No from '@/component/arrive/no'
import DeliveryThree from '../../../component/Three/delivery'
import BackButton from '@/component/storage/BackButton'

export default function Arrive() {
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState(false)

  useEffect(() => {
    // 도착한 편지가 있는지 없는지 확인하는 비동기 작업을 수행합니다.
    // 이 예제에서는 setTimeout을 사용하여 비동기 작업을 시뮬레이션합니다.
    setTimeout(() => {
      setState(true) // 비동기 작업의 결과에 따라 state를 설정합니다.
      setLoading(false) // 비동기 작업이 끝났음을 나타내기 위해 loading을 false로 설정합니다.
    }, 1000)
  }, [])

  useEffect(() => {
    // 도착한 편지 있는지 없는지 확인하는 로직
    setState(true)
  }, [])

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="absolute z-10">{state ? <Yes /> : <No />}</div>
      </div>
      <DeliveryThree
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
