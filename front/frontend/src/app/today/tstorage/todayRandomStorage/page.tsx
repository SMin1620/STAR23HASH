'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Stars } from '@react-three/drei'
import RandomModel from '../../../../component/today/todayStorage/random/randomPlanet/randomPlanet'
import GradientBackground from '../../../../component/Three/three.styled'
import { Models } from '@/component/today/todayStorage/random/planetModel/planetModel'

// const Models = [
//   {
//     name: 'planet1',
//     url: '/assets/planet-1.glb',
//     scale: [7, 7, 7],
//     position: [-3, -20, -63],
//   },
//   {
//     name: 'planet2',
//     url: '/assets/planet-2.glb',
//     scale: [3, 3, 3],
//     position: [-1, -17, -43],
//   },
//   {
//     name: 'planet3',
//     url: '/assets/planet-3.glb',
//     scale: [5, 5, 5],
//     position: [1, -14, -23],
//   },
//   {
//     name: 'planet4',
//     url: '/assets/planet-4.glb',
//     scale: [5, 5, 5],
//     position: [3, -11, -3],
//   },
//   {
//     name: 'planet5',
//     url: '/assets/planet-5.glb',
//     scale: [5, 5, 5],
//     position: [5, -8, 23],
//   },
//   {
//     name: 'planet6',
//     url: '/assets/planet-6.glb',
//     scale: [5, 5, 5],
//     position: [7, -5, 43],
//   },
// ]

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
          factor={7}
          saturation={1}
          fade
          speed={2}
        />
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, -10]} angle={0.3} />
          {Models.map((model) => (
            <RandomModel
              key={model.name}
              url={model.url}
              scale={model.scale}
              position={model.position}
            />
          ))}
        </Suspense>
        <OrbitControls />
      </Canvas>
    </GradientBackground>
  )
}
