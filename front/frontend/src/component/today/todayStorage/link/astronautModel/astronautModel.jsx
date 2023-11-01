import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'

export default function AstronautModel({ url, scale, position }) {
  const [astronaut, setAstronaut] = useState(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(
      url,
      (gltf) => {
        gltf.scene.scale.set(...scale)
        setAstronaut(gltf.scene)
      },
      undefined,
      function (error) {
        console.error(error)
      },
    )
  }, [url])

  if (!astronaut) return null
  astronaut.position.set(...position)
  return <primitive object={astronaut} />
}
