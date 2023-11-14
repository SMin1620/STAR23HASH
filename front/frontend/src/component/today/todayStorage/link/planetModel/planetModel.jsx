import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'

export default function PlanetModel({ url, scale, position }) {
  const [planetModel, setPlanetModel] = useState(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(url, (gltf) => {
      gltf.scene.scale.set(...scale)
      setPlanetModel(gltf.scene),
        undefined,
        function (error) {
          // console.log(error)
        }
    })
  }, [url])

  if (!planetModel) return null
  planetModel.position.set(...position)
  return <primitive object={planetModel} />
}
