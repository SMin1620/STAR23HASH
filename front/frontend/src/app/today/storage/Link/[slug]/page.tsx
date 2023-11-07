'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { Float, OrbitControls, SpotLight, Stars } from '@react-three/drei'
import UfoModel from '../../../../../component/today/todayStorage/link/ufoModel/ufoModel'
import PlanetModel from '../../../../../component/today/todayStorage/link/planetModel/planetModel'
import AstronautModel from '../../../../../component/today/todayStorage/link/astronautModel/astronautModel'
import GradientBackground from '../../../../../component/Three/three.styled'
import {
  Position,
  checkMinDistance,
} from '../../../../../component/today/todayStorage/checkPosition/checkPosition'
import Light from '@/component/today/todayStorage/light/light'
import LinkListGet from '@/app/utils/todayStorage/link/linkListGet'
import { LinkDetailGet } from '@/app/utils/todayStorage/link/linkDetailGet'

type Props = {
  params: {
    slug: number
  }
}

export default function TodayLinkStorage({ params }: Props) {
  const totalAmount = 5
  const [rollList, setRollList] = useState<null | any>(null)
  const [rollDetail, setRollDetail] = useState<null | any>(null)

  useEffect(() => {
    const handleListApi = async (id: number) => {
      const response = await LinkListGet(id)
      console.log(response)

      setRollList(response)
    }
    handleListApi(params.slug)
  }, [])

  const handleDetailApi = async (id: number) => {
    const response = await LinkDetailGet(id)
    console.log(response)

    setRollDetail(response)
  }
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

  return (
    <Canvas
      style={{ width: '100%', height: '100%', position: 'absolute' }}
      camera={{ position: [0, 2.2, 5], fov: 70 }}
    >
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
        {Array.from({ length: totalAmount }).map((item: any, index: number) => (
          <Float key={index} speed={1} floatIntensity={0.1}>
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
