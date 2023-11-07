'use client'
import { PlaneGeometry, MeshBasicMaterial, Mesh, TextureLoader } from 'three'
import * as THREE from 'three'

export default function ShareButton(onClick) {
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load('/link/share.png')
  const geometry = new PlaneGeometry(1, 1)
  const material = new MeshBasicMaterial({ map: texture, transparent: true })
  const mesh = new Mesh(geometry, material)
  mesh.position.set(0, -1.8, 2)
  const scale = 0.5
  mesh.scale.set(scale, scale, scale)

  const handleOnClick = () => {
    let currentUrl = window.document.location.href
    console.log(currentUrl)
    let t = document.createElement('textarea')
    document.body.appendChild(t)
    t.value = currentUrl
    t.select()
    document.execCommand('copy')
    document.body.removeChild(t)

    alert('링크가 복사되었습니다!')
  }

  return <primitive object={mesh} onClick={handleOnClick} />
}
