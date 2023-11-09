import DeliveryThree from '../../../component/Three/delivery'
import BackButton from '@/component/storage/BackButton'
import DeliveryUfo from '@/component/Three/deliveryUfo'
export default function Delivery({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="absolute z-10">
          <div className="fixed left-0 top-0">
            <BackButton />
          </div>
          <div
            style={{ marginTop: '600px' }}
            className=" flex items-center justify-center text-2xl text-white"
          >
            편지 배달하는 중...
          </div>
          <div style={{ width: '100%', height: '200px' }}>
            <DeliveryUfo style={{ width: '100%', height: '100%' }} />
          </div>
          <div className=" flex items-center justify-center text-xl text-white">
            편지 도착까지
          </div>
          <div>{children}</div>
          <div className=" flex items-center justify-center text-xl text-white">
            남았어요 ෆ⸒⸒⸜( ˶'ᵕ'˶)⸝
          </div>
        </div>
      </div>
      <DeliveryThree
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
