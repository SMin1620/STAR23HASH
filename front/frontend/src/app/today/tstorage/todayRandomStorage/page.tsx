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

const totalAmount = 30

export default function TodayRandomStorage() {
  const Axes = () => {
    const { scene } = useThree()

    useEffect(() => {
      const axesHelper = new THREE.AxesHelper(100)
      scene.add(axesHelper)
    }, [scene])
    return null
  }

  const planeRefs = Array(totalAmount)
    .fill(null)
    .map(() => ({ current: null as THREE.Object3D | null }))

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      planeRefs.forEach((ref) => {
        if (ref.current) {
          // ref.current.position.x += x * 0.05
          ref.current.position.y += y * 0.1
          ref.current.position.z += y * 0.2
        }
      })
    },
  })
  return (
    <GradientBackground>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [-17, -10, -90], near: 0.01 }}
        // {...bind()}
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
        <Axes />
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          {Array.from({ length: totalAmount }).map((_, index) => {
            const model = Models[index % Models.length]
            const startPostion = [-3, -20, -63]
            const position = [
              startPostion[0],
              startPostion[1] + 10 * index,
              startPostion[2] + 20 * index,
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
            scale={[8, 8, 8]}
            position={[-23, 38, -50]}
            rotation={[Math.PI / 10, Math.PI, Math.PI / -8]}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </GradientBackground>
  )
}
