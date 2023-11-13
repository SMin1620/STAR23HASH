'use client'
import { useState, useEffect } from 'react'
import BackButton from '@/component/storage/BackButton'

const Delivery: React.FC = () => {
  const [remainingTime, setRemainingTime] = useState('')

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date()
      const targetTime = new Date()
      targetTime.setHours(17, 0, 0) // 오후 5시

      let remainingTime = targetTime.getTime() - now.getTime()

      // 만약 현재 시간이 오후 5시 이후라면 다음 날 오후 6시까지 남은 시간을 계산
      if (remainingTime < 0) {
        targetTime.setDate(targetTime.getDate() + 1)
        remainingTime = targetTime.getTime() - now.getTime()
      }

      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60),
      )
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

      setRemainingTime(`${hours}시간 ${minutes}분 ${seconds}초`)
    }
    calculateRemainingTime()
    const intervalId = setInterval(calculateRemainingTime, 1000)

    // 컴포넌트 unmount 시에 interval clear
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="flex items-center justify-center text-3xl text-white">
      {remainingTime}
    </div>
  )
}

export default Delivery
