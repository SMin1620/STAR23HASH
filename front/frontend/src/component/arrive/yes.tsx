import { useRouter } from 'next/navigation'
import DeliveryUfo from '../Three/deliveryUfo'
import { MakeLinkAxios } from '@/app/utils/main/makeLinkAxios'
import { useEffect, useState } from 'react'

import * as a from './arrive.styled'

export default function Yes() {
  const router = useRouter()
  const [rollId, setRollId] = useState()

  const handleClick = (url: string) => {
    router.push(url)
  }

  useEffect(() => {
    async function click() {
      const check = await MakeLinkAxios()
      // console.log('요기')
      // console.log(check.data)
      setRollId(check.data.rollId)
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
