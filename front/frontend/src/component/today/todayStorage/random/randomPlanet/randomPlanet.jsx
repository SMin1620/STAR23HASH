import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'

export default function RandomPlanet({ url, scale, position }) {
  const [randomPlanet, setRandomPlanet] = useState(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(
      url,
      (gltf) => {
        gltf.scene.scale.set(...scale)
        setRandomPlanet(gltf.scene)
      },
      undefined,
      function (error) {
        console.error(error)
      },
    )
  }, [url])

  if (!randomPlanet) return null
  randomPlanet.position.set(...position)
  return <primitive object={randomPlanet} />
}
