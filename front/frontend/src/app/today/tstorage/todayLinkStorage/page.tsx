'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { Float, OrbitControls, SpotLight, Stars } from '@react-three/drei'
import UfoModel from '../../../../component/today/todayStorage/link/ufoModel/ufoModel'
import PlanetModel from '../../../../component/today/todayStorage/link/planetModel/planetModel'
import AstronautModel from '../../../../component/today/todayStorage/link/astronautModel/astronautModel'
import GradientBackground from '../../../../component/Three/three.styled'
import RandomPosition from '../../../../component/today/todayStorage/randomPosition/randomPostion'
import { Position } from '../../../../component/today/todayStorage/randomPosition/randomPostion'

export default function TodayLinkStorage() {
  const [astronautPositions, setAstronautPositions] = useState<Position[]>([])

  const positionRange = 5
  const maxAttempts = 100
  const totalAmount = 10
  const allowedRange = 10
  const minDistance = 50

  const addRandomAstronaut = () => {
    const newAstronautPositions = [...astronautPositions]
    for (let i = 0; i < totalAmount; i++) {
      const newPosition: Position = RandomPosition(
        newAstronautPositions,
        positionRange,
        maxAttempts,
        minDistance,
        allowedRange,
      )
      newAstronautPositions.push(newPosition)
    }
    setAstronautPositions(newAstronautPositions)
  }

  useEffect(() => {
    addRandomAstronaut()
  }, [])
  return (
    <GradientBackground>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 2.2, 5], fov: 70 }}
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
          {Array.from({ length: totalAmount }).map((_, index) => (
            <Float key={index} speed={1} floatIntensity={0.1}>
              <AstronautModel
                url={`/assets/astronaut${(index % 4) + 1}.glb`}
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
