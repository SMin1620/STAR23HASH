import { useRouter } from 'next/navigation'
import DeliveryUfo from '../Three/deliveryUfo'
import * as a from './arrive.styled'
export default function yes() {
  const router = useRouter()

  const handleClick = (url: string) => {
    router.push(url)
  }
  return (
    <div>
      <div
        style={{ marginTop: '650px' }}
        className="mt-20 flex items-center justify-center pt-20 text-2xl text-white"
      >
        편지가 도착했어요~
      </div>
      <div
        style={{
          width: '100%',
          height: '200px',
          marginTop: '50px',
          marginBottom: '50px',
        }}
      >
        <DeliveryUfo style={{ width: '100%', height: '100%' }} />
      </div>
      <div
        style={{ flexDirection: 'column' }}
        className="flex items-center justify-center text-2xl"
      >
        <a.arriveButton onClick={() => handleClick('/today/storage/friend')}>
          <a.arriveLink> 친구</a.arriveLink>
        </a.arriveButton>
        <a.arriveButton onClick={() => handleClick('/today/storage/Random')}>
          <a.arriveLink>랜덤</a.arriveLink>
        </a.arriveButton>
        <a.arriveButton onClick={() => handleClick('/today/storage/Link')}>
          <a.arriveLink>링크</a.arriveLink>
        </a.arriveButton>
      </div>
    </div>
  )
}
