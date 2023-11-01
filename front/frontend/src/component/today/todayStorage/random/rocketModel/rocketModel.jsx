import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'

export default function RocketModel({ url, scale, position, rotation }) {
  const [rocketModel, setRocketModel] = useState(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(url, (gltf) => {
      gltf.scene.scale.set(...scale)
      setRocketModel(gltf.scene),
        undefined,
        function (error) {
          console.log(error)
        }
    })
  }, [url])

  if (!rocketModel) return null
  rocketModel.position.set(...position)
  rocketModel.rotation.set(...rotation)
  return <primitive object={rocketModel} />
}
