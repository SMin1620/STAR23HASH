'use client'
import { useState, useEffect } from 'react'
import Yes from '@/component/arrive/yes'
import No from '@/component/arrive/no'
import DeliveryThree from '../../../component/Three/delivery'
import BackButton from '@/component/storage/BackButton'

export default function Arrive() {
  const [state, setState] = useState(false)

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
