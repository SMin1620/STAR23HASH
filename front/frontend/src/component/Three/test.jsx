'use client'

import { Canvas } from '@react-three/fiber'

import { Stars } from '@react-three/drei'
import GradientBackground from './three.styled'

function Scene() {
  return (
    <>
      <Stars
        radius={100}
        depth={25}
        count={6000}
        factor={5}
        saturation={2}
        fade
        speed={2}
      />
    </>
  )
}

function Test({ style }) {
  return (
    <GradientBackground style={style}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </GradientBackground>
  )
}

export default Test
