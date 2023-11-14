'use client'
import { useState, useEffect } from 'react'
import Yes from '@/component/arrive/yes'
import No from '@/component/arrive/no'
import DeliveryThree from '../../../component/Three/delivery'
import BackButton from '@/component/storage/BackButton'
import { TodayAlarm } from '@/app/utils/todayStorage/todayAlarm'
import * as a from './arrive.styled'

export default function Arrive() {
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState(false)

  useEffect(() => {
    // 도착한 편지가 있는지 없는지 확인 (비동기)
    async function click() {
      const check = await TodayAlarm()
      return check.data
    }
    ;(async () => {
      const check = await click()
      setTimeout(() => {
        if (check) {
          setState(check)
          setLoading(false)
        } else {
          setState(check)
          setLoading(false)
        }
      }, 1000)
    })()
  }, [])

  return loading ? (
    <></>
  ) : (
    <div>
      <div className="flex items-center justify-center">
        <div className="fixed left-0 top-0 z-10">
          <BackButton />
        </div>
        <a.ContentBox>{state ? <Yes /> : <No />}</a.ContentBox>
      </div>
      <DeliveryThree
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
