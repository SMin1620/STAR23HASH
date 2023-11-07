'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { Float, OrbitControls, SpotLight, Stars } from '@react-three/drei'
import UfoModel from '../../../../component/today/todayStorage/link/ufoModel/ufoModel'
import PlanetModel from '../../../../component/today/todayStorage/link/planetModel/planetModel'
import AstronautModel from '../../../../component/today/todayStorage/friend/astronautModel/astronautModel'
import GradientBackground from '../../../../component/Three/three.styled'
import {
  Position,
  checkMinDistance,
} from '../../../../component/today/todayStorage/checkPosition/checkPosition'
import Light from '@/component/today/todayStorage/light/light'
import { useRouter } from 'next/navigation'
import friendListGet from '@/app/utils/todayStorage/friend/friendListGet'
import { friendDetailGet } from '@/app/utils/todayStorage/friend/friendDetailGet'

export default function TodayFriendStorage() {
  const [letterList, setLetterList] = useState<null | any>(null)
  const [letterDetail, setLetterDetail] = useState<null | any>(null)

  const router = useRouter()
  // const minDistance = 2
  // const [astronautPositions, setAstronautPostions] = useState<Position[]>([])

  // useEffect(() => {
  //   const positions: Position[] = []
  //   for (let i = 0; i < totalAmount; i++) {
  //     let newPosition
  //     do {
  //       newPosition = [
  //         Math.random() * 2 - 1,
  //         Math.random() * 3 - 2,
  //         Math.random() * 3 - 2,
  //       ] as Position
  //     } while (!checkMinDistance(positions, newPosition, minDistance))
  //     positions.push(newPosition)
  //   }
  //   setAstronautPostions(positions)
  // }, [])

  useEffect(() => {
    const handleListApi = async () => {
      const response = await friendListGet()
      console.log(response.data.data)

      setLetterList(response.data.data)
    }
    handleListApi()
  }, [])

  const handleDetailApi = async (id: number) => {
    console.log('id', id)

    const response = await friendDetailGet(id)
    console.log(response.data.data)

    setLetterDetail(response.data.data)
    console.log(letterDetail)

    router.push(`/storage/friend/${letterDetail.id}`)
  }

  return (
    <Canvas
      style={{ width: '100%', height: '100%', position: 'absolute' }}
      camera={{ position: [0, 2.2, 5], fov: 70 }}
    >
      {/* <Stars
        radius={100}
        depth={25}
        count={6000}
        factor={7}
        saturation={1}
        fade
        speed={1}
      /> */}
      <Light />
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <Float
          speed={6}
          rotationIntensity={0}
          floatIntensity={1}
          floatingRange={[0, 0.1]}
        >
          <UfoModel
            url="/assets/ufo.glb"
            scale={[1.6, 1.6, 1.6]}
            position={[0, 2.5, 0]}
          />
        </Float>
        <SpotLight
          color="#feff16"
          distance={10}
          angle={0.9}
          attenuation={5}
          anglePower={3}
          position={[0, 3.1, 0]}
        />
        {letterList &&
          letterList.map((item: any, index: number) => (
            <Float key={item.id} speed={1} floatIntensity={0.1}>
              <AstronautModel
                url={`/assets/astronaut${(index % 4) + 1}.glb`}
                scale={[0.3, 0.3, 0.3]}
                position={[
                  Math.random() * 2 - 1,
                  Math.random() * 3 - 2,
                  Math.random() * 3 - 2,
                ]}
                onClick={() => handleDetailApi(item.id)}
              />
            </Float>
          ))}

        <PlanetModel
          url="/assets/planet-1.glb"
          scale={[4, 4, 4]}
          position={[0, -6, 0]}
        />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}
