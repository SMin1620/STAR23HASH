import DeliveryThree from '../../../component/Three/delivery'
import BackButton from '@/component/storage/BackButton'
const Delivery: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="absolute z-10">
          <div
            style={{ marginTop: '380px' }}
            className="mt-20 flex items-center justify-center pt-20 text-2xl text-white"
          >
            편지 배달하는 중...
          </div>
        </div>
        <div className="absolute z-10">
          <div
            style={{ marginTop: '900px' }}
            className="mt-20 flex items-center justify-center pt-20 text-2xl text-white"
          >
            남은 시간
          </div>
          <div className="flex items-center justify-center text-2xl text-white">
            18 : 00
          </div>
        </div>
      </div>
      <DeliveryThree
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default Delivery
