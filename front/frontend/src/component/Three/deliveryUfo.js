'use client'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function Ufo() {
  const ref = useRef()
  const gltf = useGLTF('/assets/glb/UFO.glb')

  gltf.scene.position.set(0, 0, 0)
  const scale = 3.2
  gltf.scene.scale.set(scale, scale, scale)
  gltf.scene.rotation.x = 0.3
  gltf.scene.rotation.z = -0.1
  gltf.scene.rotation.y = Math.PI / 2

  useFrame(({ clock }) => {
    // 매 프레임마다 y축으로 조금씩 회전
    ref.current.rotation.y += 0.012
  })

  return <primitive object={gltf.scene} ref={ref} />
}

function Scene() {
  const { scene } = useThree()

  useEffect(() => {
    // 빛1
    const light = new THREE.DirectionalLight('white', 1.8)
    light.position.y = 10
    light.position.x = 5
    light.position.z = 4
    scene.add(light)

    // 빛2
    const light2 = new THREE.DirectionalLight('white', 0.5)
    light2.position.y = 7
    light2.position.x = -5
    light2.position.z = 4
    scene.add(light2)

    const AmbientLigthtight = new THREE.AmbientLight('white', 0.8)
    AmbientLigthtight.position.z = 2
    scene.add(AmbientLigthtight)
  }, [])

  // Animation
  useFrame(({ clock }) => {
    // animation logic here
  })

  return (
    <>
      <Ufo />
    </>
  )
}
function DeliveryUfoComponent({ style }) {
  return (
    <div style={style}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

export default DeliveryUfoComponent
