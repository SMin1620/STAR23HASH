'use client'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import GradientBackground from './three.styled'

function Planet1() {
  const ref = useRef()
  const gltf = useGLTF('/assets/planet/planet-4.glb')

  gltf.scene.position.set(-1.6, -1.5, 0)
  const scale = 0.75
  gltf.scene.scale.set(scale, scale, scale)
  gltf.scene.rotation.z = -0.5
  gltf.scene.rotation.y = -0.8

  useFrame(({ clock }) => {
    // y축으로 조금씩 이동
    ref.current.position.y += Math.sin(clock.getElapsedTime()) * 0.001
  })

  return <primitive object={gltf.scene} ref={ref} />
}

function Planet2() {
  const ref = useRef()
  const gltf = useGLTF('/assets/planet/planet-10.glb')

  gltf.scene.position.set(2, -3.5, -2)
  const scale = 1.2
  gltf.scene.scale.set(scale, scale, scale)
  gltf.scene.rotation.z = -0.5
  gltf.scene.rotation.y = -0.8
  useFrame(({ clock }) => {
    // y축으로 조금씩 이동
    ref.current.position.y += Math.sin(clock.getElapsedTime() + 1) * 0.004
  })

  return <primitive object={gltf.scene} ref={ref} />
}

function Test() {
  const ref = useRef()
  const gltf = useGLTF('/assets/glb/hi.glb')

  gltf.scene.position.set(1.5, 1, 0)
  const scale = 0.75
  gltf.scene.scale.set(scale, scale, scale)
  // gltf.scene.rotation.z = -0.5
  // gltf.scene.rotation.y = -0.8

  useFrame(({ clock }) => {
    // y축으로 조금씩 이동
    ref.current.position.y += Math.sin(clock.getElapsedTime()) * 0.001
  })

  return <primitive object={gltf.scene} ref={ref} />
}

function Asteroid() {
  const ref = useRef()
  const gltf = useGLTF('/assets/glb/asteroid2.glb')

  const scale = 0.5
  gltf.scene.scale.set(scale, scale, scale)
  gltf.scene.rotation.x = 1
  gltf.scene.rotation.z = 6.5
  gltf.scene.rotation.y = -1

  const startX = -1
  const targetX = -12
  const startY = 24 // 시작 y 위치
  const targetY = -15 // 도착 y 위치
  const startZ = -25
  const targetZ = 0
  const duration = 2.5 // 애니메이션 지속 시간 (초)

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    let t = elapsedTime / duration // 시간 비율

    // 애니메이션 반복
    if (t >= 1) {
      t -= Math.floor(t) // 소수 부분만 남기고 버립니다.
    }

    // 도착위치.
    ref.current.position.x = startX + (targetX - startX) * t
    ref.current.position.y = startY + (targetY - startY) * t
    ref.current.position.z = startZ + (targetZ - startZ) * t

    if (t >= 1) {
      // 애니메이션이 종료되면 초기 위치로
      ref.current.position.x = startX
      ref.current.position.y = startY
      ref.current.position.z = startZ
    }
  })

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

    const AmbientLigthtight = new THREE.AmbientLight('white', 1)
    AmbientLigthtight.position.z = 2
    scene.add(AmbientLigthtight)
  }, [])

  return (
    <>
      <Planet1 />
      <Planet2 />
      <Asteroid />
      <Test />
    </>
  )
}
function LoginComponent({ style }) {
  return (
    <div style={style}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

export default LoginComponent
