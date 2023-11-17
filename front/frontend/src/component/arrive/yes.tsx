import { useRouter } from 'next/navigation'
import DeliveryUfo from '../Three/deliveryUfo'
import { MakeLinkAxios } from '@/app/utils/main/makeLinkAxios'
import { useEffect, useState } from 'react'
import IsMember from '@/store/member'

import * as a from './arrive.styled'

export default function Yes() {
  const router = useRouter()
  const [rollId, setRollId] = useState()
  const { setIsMember } = IsMember()

  const handleClick = (url: string) => {
    setIsMember(true)
    router.push(url)
  }

  const setCookieValue = (
    name: string,
    value: string,
    options: any = {},
  ): void => {
    if (typeof window !== 'undefined') {
      const cookieOptions = {
        // 기본 쿠키 옵션들 (추가 옵션을 필요에 맞게 설정할 수 있습니다)
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 만료 기간: 7일 (예시)
        path: '/', // 쿠키의 경로
        sameSite: 'strict', // 동일 출처 정책
        // secure: process.env.NODE_ENV === 'production', // HTTPS에서만 쿠키 전송
        ...options,
      }

      document.cookie = `${name}=${value}; ${Object.keys(cookieOptions)
        .map((key) => `${key}=${cookieOptions[key]}`)
        .join('; ')}`
    }
  }

  useEffect(() => {
    async function click() {
      const check = await MakeLinkAxios()
      setRollId(check.data.rollId)
      setCookieValue('rollId', check.data.rollId)
    }
    click()
  }, [])

  return (
    <div>
      <div className="flex items-center justify-center pb-10 text-2xl text-white">
        편지가 도착했어요~(｡•̀ᴗ-)✧
      </div>
      <a.UfoStyle>
        <DeliveryUfo style={{ width: '100%', height: '100%' }} />
      </a.UfoStyle>
      <div
        style={{ flexDirection: 'row', gap: '1rem' }}
        className="flex items-center justify-center text-2xl"
      >
        <a.arriveButton onClick={() => handleClick('/today/storage/friend')}>
          <a.arriveLink> 친구</a.arriveLink>
        </a.arriveButton>
        <a.arriveButton onClick={() => handleClick('/today/storage/Random')}>
          <a.arriveLink>랜덤</a.arriveLink>
        </a.arriveButton>
        <a.arriveButton
          onClick={() => handleClick(`/today/storage/Link/${rollId}`)}
        >
          <a.arriveLink>링크</a.arriveLink>
        </a.arriveButton>
      </div>
    </div>
  )
}
