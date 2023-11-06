'use client'

import { PlaneGeometry, MeshBasicMaterial, Mesh, TextureLoader } from 'three'
import * as THREE from 'three'

export default function ShareButton() {
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load('/link/share.png')
  const geometry = new PlaneGeometry(1, 1)
  const material = new MeshBasicMaterial({ map: texture, transparent: true })
  const mesh = new Mesh(geometry, material)
  mesh.position.set(0, -1.8, 2)
  const scale = 0.5
  mesh.scale.set(scale, scale, scale)

  return <primitive object={mesh} />
}
