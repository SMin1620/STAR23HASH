'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { Float, OrbitControls, SpotLight, Stars } from '@react-three/drei'
import UfoModel from '../../../../component/today/todayStorage/link/ufoModel/ufoModel'
import PlanetModel from '../../../../component/today/todayStorage/link/planetModel/planetModel'
import AstronautModel from '../../../../component/today/todayStorage/friend/astronautModel/astronautModel'

import Light from '@/component/today/todayStorage/light/light'
import { useRouter } from 'next/navigation'
import friendListGet from '@/app/utils/todayStorage/friend/friendListGet'
import { friendDetailGet } from '@/app/utils/todayStorage/friend/friendDetailGet'
import { BackButton, FriendContainer, HtmlContainer } from './friend.styled'

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
      try {
        const response = await friendListGet()

        setLetterList(response.data.data)
      } catch (error) {
        router.replace(`/error`)
      }
    }
    handleListApi()
  }, [])

  const handleDetailApi = async (id: number) => {
    try {
      const response = await friendDetailGet(id)

      setLetterDetail(response.data.data)

      router.push(`/storage/friend/${id}`)
    } catch (error) {
      router.replace(`/error`)
    }
  }

  const goBack = () => {
    router.back()
  }

  return (
    <FriendContainer>
      <Canvas
        style={{
          width: '100vw',
          height: '100vh',
          position: 'relative',
          zIndex: '1',
        }}
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
              url="/assets/other/ufo.glb"
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
            letterList.map((item: any, index: number) => {
              const randomIndex = Math.floor(Math.random() * index)
              const modelIndex = (randomIndex % 5) + 1

              return (
                <Float key={item.id} speed={1} floatIntensity={0.1}>
                  <AstronautModel
                    url={`/assets/character/character${modelIndex}.glb`}
                    scale={[0.2, 0.2, 0.2]}
                    position={[
                      Math.random() * 2 - 1,
                      Math.random() * 3 - 2,
                      Math.random() * 3 - 2,
                    ]}
                    onClick={(event: any) => {
                      if (event.intersections[0].object === event.object) {
                        handleDetailApi(item.id)
                      }
                    }}
                  />
                </Float>
              )
            })}

          <PlanetModel
            url="/assets/planet/planet-1.glb"
            scale={[4, 4, 4]}
            position={[0, -6, 0]}
          />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <HtmlContainer>
        <BackButton onClick={() => goBack()}>뒤로가기</BackButton>
      </HtmlContainer>
    </FriendContainer>
  )
}
