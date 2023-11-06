import Link from 'next/link'
import DeliveryUfo from '../Three/deliveryUfo'
import * as a from './arrive.styled'
export default function yes() {
  return (
    <div>
      <div
        style={{ marginTop: '650px' }}
        className="mt-20 flex items-center justify-center pt-20 text-2xl text-white"
      >
        편지가 도착했어요~
      </div>
      <div style={{ width: '100%', height: '200px' }}>
        <DeliveryUfo style={{ width: '100%', height: '100%' }} />
      </div>
      <div
        style={{ flexDirection: 'column' }}
        className="flex items-center justify-center text-2xl"
      >
        <a.arriveButton>
          <Link href="/today/tstorage/todayLinkStorage">
            <a.arriveLink> 친구</a.arriveLink>
          </Link>
        </a.arriveButton>
        <a.arriveButton>
          <Link href="/today/tstorage/todayLinkStorage">
            <a.arriveLink>랜덤</a.arriveLink>
          </Link>
        </a.arriveButton>
        <a.arriveButton>
          <Link href="/today/tstorage/todayLinkStorage">
            <a.arriveLink>링크</a.arriveLink>
          </Link>
        </a.arriveButton>
      </div>
    </div>
  )
}
