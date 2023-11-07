import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

export default function Axes() {
  const Axes = () => {
    const { scene } = useThree()
    useEffect(() => {
      const axesHelper = new THREE.AxesHelper(100)
      scene.add(axesHelper)
    }, [scene])
    return null
  }
}
