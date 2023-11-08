'use client'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function Satellite() {
  const ref = useRef()
  const gltf = useGLTF('/assets/glb/satellite.glb')

  gltf.scene.position.set(1.1, 3.1, 0)
  const scale = 0.12
  gltf.scene.scale.set(scale, scale, scale)
  gltf.scene.rotation.z = -0.5
  gltf.scene.rotation.y = -0.8

  useFrame(({ clock }) => {
    // 매 프레임마다 y축으로 조금씩 이동
    ref.current.position.y += Math.sin(clock.getElapsedTime()) * 0.001
  })

  return <primitive object={gltf.scene} ref={ref} />
}

function Planet1() {
  const ref = useRef()
  const gltf = useGLTF('/assets/glb/planet-4.glb')

  gltf.scene.position.set(-1.6, -1.5, 0)
  const scale = 0.75
  gltf.scene.scale.set(scale, scale, scale)
  gltf.scene.rotation.z = -0.5
  gltf.scene.rotation.y = -0.8

  useFrame(({ clock }) => {
    // 매 프레임마다 y축으로 조금씩 이동
    ref.current.position.y += Math.sin(clock.getElapsedTime()) * 0.001
  })

  return <primitive object={gltf.scene} ref={ref} />
}

function Planet2() {
  const ref = useRef()
  const gltf = useGLTF('/assets/Planet-10.glb')

  gltf.scene.position.set(2, -3.0, -2)
  const scale = 0.9
  gltf.scene.scale.set(scale, scale, scale)
  gltf.scene.rotation.z = -0.5
  gltf.scene.rotation.y = -0.8

  //   useFrame(({ clock }) => {
  //     // 매 프레임마다 y축으로 조금씩 이동
  //     ref.current.position.x += Math.sin(clock.getElapsedTime()) * 0.001
  //   })

  return <primitive object={gltf.scene} ref={ref} />
}

function Scene() {
  const { scene, camera, gl } = useThree()

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

  return (
    <>
      <Satellite />
      <Planet1 />
      <Planet2 />
    </>
  )
}
function DeliveryComponent({ style }) {
  return (
    <div style={style}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

export default DeliveryComponent
