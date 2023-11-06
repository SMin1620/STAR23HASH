import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function Star() {
  const ref = useRef()
  const gltf = useGLTF('/assets/glb/star.glb')

  gltf.scene.position.set(9, -5, 0)
  const scale = 8
  gltf.scene.scale.set(scale, scale, scale)

  useFrame(({ clock }) => {
    // Astronaut 객체를 중심으로 공전하도록 설정
    const radius = 7.5 // 공전 반지름 (Astronaut 객체와의 거리)
    const speed = 1.2 // 공전 속도

    // 시간에 따라 변하는 각도를 계산 (speed를 조절하여 공전 속도를 변경할 수 있습니다)
    const angle = clock.elapsedTime * speed

    // 원형 경로를 따라 움직이도록 x와 z 좌표를 업데이트
    ref.current.position.x = Math.cos(angle) * radius
    ref.current.position.z = Math.sin(angle) * radius
  })

  return <primitive object={gltf.scene} ref={ref} />
}

function Astronaut() {
  const ref = useRef()
  const gltf = useGLTF('/assets/astronaut3.glb')

  gltf.scene.position.set(0, -1, 0)
  const scale = 5
  gltf.scene.scale.set(scale, scale, scale)
  gltf.scene.rotation.z = 0.1
  gltf.scene.rotation.y = -0.4

  useFrame(({ clock }) => {
    // y축으로 조금씩 이동
    ref.current.position.y += Math.sin(clock.getElapsedTime() + 3) * 0.005
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
    const light2 = new THREE.DirectionalLight('white', 5)
    light2.position.y = 3
    light2.position.x = -5
    light2.position.z = 1
    scene.add(light2)

    const AmbientLigthtight = new THREE.AmbientLight('white', 2)
    AmbientLigthtight.position.z = 2
    scene.add(AmbientLigthtight)
  }, [])

  return (
    <>
      <Astronaut />
      <Star />
    </>
  )
}

export default function LoginAstronaut({ style }) {
  return (
    <div style={{ ...style, overflow: 'visible' }}>
      <Canvas camera={{ position: [0, 4, 13], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
