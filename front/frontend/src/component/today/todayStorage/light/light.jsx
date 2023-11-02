import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

export default function Light() {
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
    // 빛3
    const AmbientLigthtight = new THREE.AmbientLight('white', 0.6)
    AmbientLigthtight.position.z = 2
    scene.add(AmbientLigthtight)

    // const lightHelper = new THREE.DirectionalLightHelper(light, 5)
    // scene.add(lightHelper)
  }, [])
  return null
}
