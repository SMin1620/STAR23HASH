'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'

function Planet1({ planetNum }) {
  const nodes = useGLTF(`/assets/glb/planet-${planetNum}.glb`)

  const modelRef = useRef()

  useEffect(() => {
    if (nodes) {
      // nodes.traverse((child) => {
      //   if (child.isMesh) {
      //     child.castShadow = true
      //     child.receiveShadow = true
      //   }
      // })
      nodes.scene.position.set(0, 0, -13)
      const scale = 5
      nodes.scene.scale.set(scale, scale, scale)
    }
  }, [nodes])

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x += 0.0015
      modelRef.current.rotation.y += 0.0045
    }
  })

  return nodes ? <primitive object={nodes.scene} ref={modelRef} /> : null
}

function TestPlanet({ planetNum }) {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <directionalLight />
      <Planet1 planetNum={planetNum} />
    </Canvas>
  )
}

export default TestPlanet
