import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'

export default function UfoModel({ url, scale, position }) {
  const [ufoModel, setUfoModel] = useState(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(url, (gltf) => {
      gltf.scene.scale.set(...scale)
      setUfoModel(gltf.scene),
        undefined,
        function (error) {
          // console.log(error)
        }
    })
  }, [url])

  if (!ufoModel) return null
  ufoModel.position.set(...position)
  return <primitive object={ufoModel} />
}
