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
      console.log('요기')
      console.log(check.data)
      return check.data
    }

    ;(async () => {
      const check = await click()
      setTimeout(() => {
        if (check) {
          setState(check) // 비동기 작업의 결과에 따라 state를 설정
          setLoading(false) // 비동기 작업이 끝났음
        } else {
          setState(check) // 비동기 작업의 결과에 따라 state를 설정
          setLoading(false) // 비동기 작업이 끝났음
        }
      }, 1000)
    })()
  }, [])

  // useEffect(() => {
  //   // todayAlarm api로 확인하는 부분
  //   // 도착한 편지 있는지 없는지 확인하는 로직
  //   setState(false)
  // }, [])

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="fixed left-0 top-0">
          <BackButton />
        </div>

        <a.ContentBox>
          {loading ? <></> : state ? <Yes /> : <No />}
        </a.ContentBox>
      </div>
      <DeliveryThree
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
