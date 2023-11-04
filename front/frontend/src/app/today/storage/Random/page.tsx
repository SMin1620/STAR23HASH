'use client'
import { Canvas, useThree } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import { OrbitControls, Stars } from '@react-three/drei'
import RandomModel from '../../../../component/today/todayStorage/random/randomPlanet/randomPlanet'
import GradientBackground from '../../../../component/Three/three.styled'
import { Models } from '@/component/today/todayStorage/random/planetModel/planetModel'
import RocketModel from '@/component/today/todayStorage/random/rocketModel/rocketModel'
import * as THREE from 'three'
import RandomPlanet from '../../../../component/today/todayStorage/random/randomPlanet/randomPlanet'
import { useGesture } from '@use-gesture/react'
import Light from '@/component/today/todayStorage/light/light'

const totalAmount = 30

export default function TodayRandomStorage() {
  const Data = () => {
    return [
      {
        id: 1,
        senderId: 1,
        senderName: '빛나는 북극토끼',
        receiverId: 33,
        receiverName: '졸린 봉황',
        content: '어쩔티비',
        createdAt: '2023-11-02T09:57:51.124853',
        send: true,
        read: true,
      },
      {
        id: 6,
        senderId: 33,
        senderName: '졸린 봉황',
        receiverId: 1,
        receiverName: '빛나는 북극토끼',
        content: '저쩔티비',
        createdAt: '2023-11-02T09:57:51.093082',
        send: false,
        read: true,
      },
    ]
  }

  const planeRefs = Array(totalAmount)
    .fill(null)
    .map(() => ({ current: null as THREE.Object3D | null }))

  const bind = useGesture({
    onDrag: ({ offset: [x, y], direction, movement: [mx, my] }) => {
      console.log(direction)
      console.log('offset', x, y)
      console.log('movement', x, y)

      planeRefs.forEach((ref) => {
        if (ref.current) {
          if (my > 0) {
            ref.current.position.y += y * -0.0001
            ref.current.position.z += y * -0.0012
          } else if (my < 0) {
            ref.current.position.y += y * 0.0001
            ref.current.position.z += y * 0.0012
          }
          // ref.current.position.x += x * 0.05
        }
      })
    },
  })
  return (
    <GradientBackground style={{ touchAction: 'none' }}>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{
          position: [-22, 50, -100],
          // rotation: [0, Math.PI / 8, 0],
          near: 0.01,
        }}
        {...bind()}
      >
        <Stars
          radius={100}
          depth={25}
          count={6000}
          factor={8}
          saturation={1}
          fade
          speed={2}
        />
        <Light />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          {Array.from({ length: totalAmount }).map((_, index) => {
            const model = Models[index % Models.length]
            const startPostion = [-3, -20, -63]
            const position = [
              startPostion[0],
              startPostion[1] + 10 * index,
              startPostion[2] + 120 * index,
            ]
            return (
              <RandomPlanet
                key={index}
                url={model.url}
                scale={model.scale}
                position={position}
                mesh={planeRefs[index]}
              />
            )
          })}
          <RocketModel
            url="/assets/rocket-1.glb"
            scale={[10, 10, 10]}
            position={[-23, 73, 85]}
            rotation={[Math.PI / 4.5, Math.PI, Math.PI / -8]}
          />
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </GradientBackground>
  )
}
