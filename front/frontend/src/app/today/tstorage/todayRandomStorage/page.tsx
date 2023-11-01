'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Stars } from '@react-three/drei'
import RandomModel from '../../../../component/today/todayStorage/random/randomPlanet/randomPlanet'
import GradientBackground from '../../../../component/Three/three.styled'
import { Models } from '@/component/today/todayStorage/random/planetModel/planetModel'

const totalAmount = 10

export default function Page() {
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
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, -10]} angle={0.3} />
          {Array.from({ length: totalAmount }).map((_, index) => {
            const model = Models[index % Models.length]
            const startPostion = [-3, -20, -63]
            const position = [
              startPostion[0] + 2 * index,
              startPostion[1] + 3 * index,
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
        </Suspense>
        <OrbitControls />
      </Canvas>
    </GradientBackground>
  )
}
