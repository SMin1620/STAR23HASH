'use client'
import { Canvas, useThree } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import { OrbitControls, Stars } from '@react-three/drei'
import RandomModel from '../../../../component/today/todayStorage/random/randomPlanet/randomPlanet'
import GradientBackground from '../../../../component/Three/three.styled'
import { Models } from '@/component/today/todayStorage/random/planetModel/planetModel'
import RocketModel from '@/component/today/todayStorage/random/rocketModel/rocketModel'
import * as THREE from 'three'

const totalAmount = 10

export default function TodayRandomStorage() {
  const Axes = () => {
    const { scene } = useThree()

    useEffect(() => {
      const axesHelper = new THREE.AxesHelper(100)
      scene.add(axesHelper)
    }, [scene])
    return null
  }
  return (
    <GradientBackground>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [-20, 10, -100], near: 0.01 }}
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
          <spotLight position={[10, 10, -10]} angle={0.3} />
          {Array.from({ length: totalAmount }).map((_, index) => {
            const model = Models[index % Models.length]
            const startPostion = [-3, -20, -63]
            const position = [
              startPostion[0] + -2 * index,
              startPostion[1] + 10 * index,
              startPostion[2] + 20 * index,
            ]
            return (
              <RandomModel
                key={index}
                url={model.url}
                scale={model.scale}
                position={position}
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
