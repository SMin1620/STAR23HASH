import * as a from './arrive.styled'
import DeliveryUfo from '../Three/deliveryUfo'

export default function no() {
  return (
    <div>
      <div
        className="flex items-center justify-center pb-10 text-2xl text-white"
        style={{
          wordWrap: 'break-word',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        오늘은 도착한 편지가 없어요 ( ˃̣̣̥‸˂̣̣̥)
      </div>
      <a.UfoStyle>
        <DeliveryUfo style={{ width: '100%', height: '100%' }} />
      </a.UfoStyle>
    </div>
  )
}
