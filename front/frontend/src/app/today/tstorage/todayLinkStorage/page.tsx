'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Float, OrbitControls, SpotLight, Stars } from '@react-three/drei'
import UfoModel from '../../../../component/today/todayStorage/link/ufoModel/ufoModel'
import PlanetModel from '../../../../component/today/todayStorage/link/planetModel/planetModel'
import AstronautModel from '../../../../component/today/todayStorage/link/astronautModel/astronautModel'
import GradientBackground from '../../../../component/Three/three.styled'

export default function todayLinkStorage() {
  return (
    <GradientBackground>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 1, 5], fov: 70 }}
      >
        <Stars
          radius={100}
          depth={25}
          count={6000}
          factor={5}
          saturation={1}
          fade
          speed={2}
        />
        <Suspense fallback={null}>
          <ambientLight intensity={1.0} />
          <Float
            speed={6}
            rotationIntensity={0}
            floatIntensity={1}
            floatingRange={[0, 0.1]}
          >
            <UfoModel
              url="/assets/ufo.glb"
              scale={[2, 2, 2]}
              position={[0, 2, 0]}
            />
          </Float>
          <SpotLight
            color="#feff16"
            distance={10}
            angle={0.9}
            attenuation={5}
            anglePower={3}
            position={[0, 2, 0]}
          />
          {[1, 2, 3, 4].map((index) => (
            <Float key={index} speed={2} floatIntensity={0.5}>
              <AstronautModel
                url={`/assets/astronaut${index}.glb`}
                scale={[0.3, 0.3, 0.3]}
                position={[
                  Math.random() * 2 - 1,
                  Math.random() * 3 - 2,
                  Math.random() * 3 - 2,
                ]}
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
    </GradientBackground>
  )
}
