'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, SpotLight } from '@react-three/drei'
import UfoModel from '../../../../component/today/todayStorage/link/ufoModel/ufoModel'
import PlanetModel from '../../../../component/today/todayStorage/link/planetModel/planetModel'
import AstronautModel from '../../../../component/today/todayStorage/link/astronautModel/astronautModel'

export default function todayLinkStorage() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 1, 5], fov: 70 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.0} />
          <UfoModel
            url="/assets/ufo.glb"
            scale={[2, 2, 2]}
            position={[0, 2, 0]}
          />
          <SpotLight
            color="#fffec8"
            distance={10}
            angle={0.9}
            attenuation={5}
            anglePower={10}
          />
          <PlanetModel
            url="/assets/planet-1.glb"
            scale={[4, 4, 4]}
            position={[0, -6, 0]}
          />
          {[1, 2, 3, 4].map((index) => (
            <AstronautModel
              key={index}
              url={`/assets/astronaut${index}.glb`}
              scale={[0.3, 0.3, 0.3]}
              position={[
                Math.random() * 2 - 1,
                Math.random() * 3 - 2,
                Math.random() * 3 - 2,
              ]}
            />
          ))}
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}
