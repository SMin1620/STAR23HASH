import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'
import { useGesture } from '@use-gesture/react'

export default function RandomPlanet({ url, scale, position, mesh, onClick }) {
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

  const handleClick = (e) => {
    console.log('clicked')
    if (onClick) {
      onClick(e)
    }
  }

  return <primitive object={randomPlanet} ref={mesh} onClick={handleClick} />
}
