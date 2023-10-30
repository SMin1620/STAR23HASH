'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import RandomModel from '../../../../component/today/todayStorage/random/randomPlanet/randomPlanet'

const Models = [
  {
    name: 'planet1',
    url: '/assets/planet-1.glb',
    scale: [6, 6, 6],
    position: [-5, -5, 3],
  },
  {
    name: 'planet2',
    url: '/assets/planet-2.glb',
    scale: [5, 5, 5],
    position: [-3, -3, 23],
  },
  {
    name: 'planet3',
    url: '/assets/planet-3.glb',
    scale: [4, 4, 4],
    position: [-1, -1, 43],
  },
  {
    name: 'planet4',
    url: '/assets/planet-4.glb',
    scale: [3, 3, 3],
    position: [1, 1, 63],
  },
  {
    name: 'planet5',
    url: '/assets/planet-5.glb',
    scale: [2, 2, 2],
    position: [3, 3, 83],
  },
  {
    name: 'planet6',
    url: '/assets/planet-6.glb',
    scale: [1, 1, 1],
    position: [5, 5, 103],
  },
]

export default function Page() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [-80, 100, -20], near: 0.01 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <spotLight position={[10, -25, -10]} angle={0.3} />
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
    </div>
  )
}
