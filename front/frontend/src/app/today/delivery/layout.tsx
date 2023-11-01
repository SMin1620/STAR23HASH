import DeliveryThree from '../../../component/Three/delivery'
import BackButton from '@/component/storage/BackButton'
export default function Delivery({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="absolute z-10">
          <div className="fixed left-0 top-0">
            <BackButton />
          </div>
          <div
            style={{ marginTop: '300px' }}
            className="mt-20 flex items-center justify-center pt-20 text-2xl text-white"
          >
            편지 배달하는 중...
          </div>
        </div>
        <div className="absolute z-10">
          <div
            style={{ marginTop: '730px' }}
            className="mt-20 flex items-center justify-center pt-20 text-2xl text-white"
          >
            남은 시간
          </div>
          <div>{children}</div>
          <div className="flex items-center justify-center text-2xl text-white"></div>
        </div>
      </div>
      <DeliveryThree
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
