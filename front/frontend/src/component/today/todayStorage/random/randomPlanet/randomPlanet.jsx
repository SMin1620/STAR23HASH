import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'

// const Models = [
//   { name: 'planet1', url: '/assets/planet-1.glb', scale: [6, 6, 6] },
//   { name: 'planet2', url: '/assets/planet-2.glb', scale: [5, 5, 5] },
//   { name: 'planet3', url: '/assets/planet-3.glb', scale: [4, 4, 4] },
//   { name: 'planet4', url: '/assets/planet-4.glb', scale: [3, 3, 3] },
//   { name: 'planet5', url: '/assets/planet-5.glb', scale: [2, 2, 2] },
//   { name: 'planet6', url: '/assets/planet-6.glb', scale: [1, 1, 1] },
// ]

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
