'use client'
import { useState, useEffect } from 'react'

const Main: React.FC = () => {
  const [remainingTime, setRemainingTime] = useState('')
  const [check, setCheck] = useState(false)

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date()
      const targetTime = new Date()
      targetTime.setHours(17, 0, 0) // 오후 5시

      let remainingTime = targetTime.getTime() - now.getTime()

      // 만약 현재 시간이 오후 5시 이후라면 다음 날 오후 5시까지 남은 시간을 계산
      if (remainingTime < 0) {
        targetTime.setDate(targetTime.getDate() + 1)
        remainingTime = targetTime.getTime() - now.getTime()
      }

      // 현재 시간이 오후 5시 이후 또는 오전 6시 이전인지 확인
      if (now.getHours() >= 17 || now.getHours() < 6) {
        setCheck(true)
      } else {
        setCheck(false)
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
    <>
      <div>
        {check ? (
          <div className="ml-1 mt-12 flex text-2xl text-white">
            오늘의 편지를 확인해보세요 (⩌⩊⩌)
          </div>
        ) : (
          <div>
            <div className="ml-1 mt-14 flex text-2xl text-white">5시까지</div>
            <div className="flex items-center justify-center text-5xl text-white">
              {remainingTime}
            </div>
            <div className="ml-1 text-right text-2xl text-white">남았어요</div>
          </div>
        )}
      </div>
    </>
  )
}

export default Main
