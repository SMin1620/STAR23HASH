'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useFBX } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function Planet1() {
  const fbx = useFBX('/assets/Planet-1.fbx')
  const modelRef = useRef()

  useEffect(() => {
    fbx.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })

    fbx.position.set(0, 0, -13)
    const scale = 0.05
    fbx.scale.set(scale, scale, scale)
  }, [fbx])

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x += 0.0025
      modelRef.current.rotation.y += 0.0045
    }
  })

  return <primitive object={fbx} ref={modelRef} />
}

function TestPlanet() {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 10]} />
      <Planet1 />
    </Canvas>
  )
}

export default TestPlanet
