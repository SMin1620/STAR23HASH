'use client'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { PlaneGeometry, MeshBasicMaterial, Mesh, TextureLoader } from 'three'
import { useFBX, useGLTF } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import * as THREE from 'three'

function Planet1() {
  const gltf = useGLTF('/assets/planet/planet-5.glb')

  const modelRef = useRef()

  gltf.scene.position.set(-5, 4.5, -13)
  const scale = 3.5
  gltf.scene.scale.set(scale, scale, scale)
  // gltf.scene.rotation.z = 0.4
  // gltf.scene.rotation.y = -0.8
  gltf.scene.rotation.x = 0.25

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x += 0.0002
      modelRef.current.rotation.y += 0.0002
    }
  })

  return <primitive object={gltf.scene} ref={modelRef} />
}

function Planet2() {
  const gltf = useGLTF('/assets/planet/planet-3.glb')

  const modelRef = useRef()

  gltf.scene.position.set(9, 0.5, -23)
  const scale = 3.5
  gltf.scene.scale.set(scale, scale, scale)
  gltf.scene.rotation.x = 0.4
  gltf.scene.rotation.y = -0.3

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x += 0.003
      modelRef.current.rotation.y += 0.002
    }
  })

  return <primitive object={gltf.scene} ref={modelRef} />
}

function Planet3() {
  const gltf = useGLTF('/assets/planet/planet-1.glb')

  gltf.scene.position.set(-0.05, -6.5, -3)
  const scale = 4.5
  gltf.scene.scale.set(scale, scale, scale)
  gltf.scene.rotation.x = 0.4
  gltf.scene.rotation.y = -0.3

  return <primitive object={gltf.scene} />
}

function Ufo({ forwardedRef }) {
  const gltf = useGLTF('/assets/other/ufo.glb')

  gltf.scene.position.set(1.8, 3, -8)
  const scale = 1.2
  gltf.scene.scale.set(scale, scale, scale)
  gltf.scene.rotation.x = 0.1
  gltf.scene.rotation.z = 0.15

  useFrame(({ clock }) => {
    forwardedRef.current.position.y +=
      Math.sin(clock.getElapsedTime() * 3) * 0.003
  })

  return <primitive object={gltf.scene} ref={forwardedRef} />
}

function SpaceShip({ forwardedRef }) {
  const gltf = useGLTF('/assets/glb/rover.glb')
  // console.log(gltf.scene)

  gltf.scene.position.set(-1.5, -3.0, -3.9)
  const scale = 0.3
  gltf.scene.scale.set(scale, scale, scale)
  gltf.scene.rotation.z = 0.4
  gltf.scene.rotation.y = -0.8

  // gltf.scene.rotation.x = 0.5

  return <primitive ref={forwardedRef} object={gltf.scene} />
}

function StorageComponent({ forwardedRef }) {
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load('/main/storageButton.svg')
  const geometry = new PlaneGeometry(1, 1)
  const material = new MeshBasicMaterial({ map: texture, transparent: true })
  const mesh = new Mesh(geometry, material)
  mesh.position.set(-2.2, -1, -3.9) // Set your coordinates
  const scale = 1.9
  mesh.scale.set(scale, scale, scale)
  // mesh.rotation.z = -0.2

  return <primitive object={mesh} ref={forwardedRef} />
}

function RandomComponent({ forwardedRef }) {
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load('/main/randomButton.svg')
  const geometry = new PlaneGeometry(1, 1)
  const material = new MeshBasicMaterial({ map: texture, transparent: true })
  const mesh = new Mesh(geometry, material)
  mesh.position.set(-1.8, -0.5, -4.0) // Set your coordinates
  const scale = 1.3
  mesh.scale.set(scale, scale, scale)
  // mesh.rotation.z = -0.2

  return <primitive object={mesh} ref={forwardedRef} />
}

function FriendComponent({ forwardedRef }) {
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load('/main/friendButton.svg')
  const geometry = new PlaneGeometry(1, 1)
  const material = new MeshBasicMaterial({ map: texture, transparent: true })
  const mesh = new Mesh(geometry, material)
  mesh.position.set(-2.9, -1.2, -4.0) // Set your coordinates
  const scale = 1.2
  mesh.scale.set(scale, scale, scale)
  // mesh.rotation.z = 0.3

  return <primitive object={mesh} ref={forwardedRef} />
}

function TodayComponent({ forwardedRef }) {
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load('/main/todayLetterButton.svg')
  const geometry = new PlaneGeometry(1, 1)
  const material = new MeshBasicMaterial({ map: texture, transparent: true })
  const mesh = new Mesh(geometry, material)
  mesh.position.set(2.4, 4.8, -7.5) // Set your coordinates
  const scale = 1.9
  mesh.scale.set(scale, scale, scale)
  // mesh.rotation.z = -0.2

  return <primitive object={mesh} ref={forwardedRef} />
}

function WriteComponent({ forwardedRef }) {
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load('/main/writeButton.svg')
  const geometry = new PlaneGeometry(1, 1)
  const material = new MeshBasicMaterial({ map: texture, transparent: true })
  const mesh = new Mesh(geometry, material)
  mesh.position.set(2, -1.5, -4) // Set your coordinates
  const scale = 1.7
  mesh.scale.set(scale, scale, scale)
  // mesh.rotation.z = -0.2

  return <primitive object={mesh} ref={forwardedRef} />
}

function Table({ forwardedRef }) {
  const gltf = useGLTF('/assets/table.glb')
  // console.log(gltf.scene)

  gltf.scene.position.set(0.8, -2.9, -3)
  const scale = 0.5
  gltf.scene.scale.set(scale, scale, scale)
  // gltf.scene.rotation.z = 0.8
  gltf.scene.rotation.y = 0.8
  const ref = useRef()
  // gltf.scene.rotation.x = 0.5

  return <primitive ref={forwardedRef} object={gltf.scene} />
}

function Scene() {
  const { scene, camera, gl } = useThree()
  const router = useRouter()
  const tableRef = useRef()
  const spaceshipRef = useRef()
  const friendRef = useRef()
  const randomRef = useRef()
  const ufoRef = useRef()
  const todayRef = useRef()
  const storageRef = useRef()
  const writeRef = useRef()
  const tl = gsap.timeline()

  useEffect(() => {
    // 빛1
    const light = new THREE.DirectionalLight('white', 3)
    light.position.y = 10
    light.position.x = 5
    light.position.z = 4
    scene.add(light)
    // 빛2
    const light2 = new THREE.DirectionalLight('white', 1)
    light2.position.y = 7
    light2.position.x = -5
    light2.position.z = 4
    scene.add(light2)
    // 빛3
    const AmbientLigthtight = new THREE.AmbientLight('white', 1.5)
    AmbientLigthtight.position.z = 2
    scene.add(AmbientLigthtight)
  }, [])

  const [cameraPosition, setCameraPosition] = useState('far')
  const [showStorage, setShowStorage] = useState(true)
  const [showRandom, setShowRandom] = useState(false)
  const [showFriend, setShowFriend] = useState(false)

  //카메라 이동
  useEffect(() => {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    const initialPosition = new THREE.Vector3(0, 0, 5)

    function tableClick(e) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObject(tableRef.current)
      const intersects2 = raycaster.intersectObject(writeRef.current)
      if (intersects.length > 0 || intersects2.length > 0) {
        // UFO 위치에 따른 적절한 카메라 위치 계산
        const newPosition = new THREE.Vector3(0.95, -1.43, -2)

        tl.to(
          camera.position,
          {
            duration: 2,
            x: newPosition.x,
            y: newPosition.y,
            z: newPosition.z,
            onUpdate: () => {
              camera.updateProjectionMatrix()
              const fadeOutDiv = document.getElementById('fade-out-div')
              if (fadeOutDiv) {
                gsap.to(fadeOutDiv.style, {
                  duration: 2,
                  opacity: 1,
                  onComplete: () => {
                    router.push('/write')
                  },
                })
              }
            },
          },
          0,
        )
        tl.to(
          camera.rotation,
          {
            duration: 3,
            x: -0.8,
            y: 0,
            z: 0,
            onUpdate: () => {
              camera.updateProjectionMatrix()
            },
          },
          0,
        )
      }
    }

    function storageClick(e) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObject(spaceshipRef.current)
      let intersects2 = []
      if (storageRef.current != null) {
        intersects2 = raycaster.intersectObject(storageRef.current)
      }

      if (intersects.length || intersects2.length) {
        let newPosition
        let newCamera
        // console.log(showStorage)
        if (cameraPosition === 'far') {
          //gltf.scene.position.set(-1.5, -1.6, -3.9)
          newPosition = new THREE.Vector3(-2.2, 0, 0)
          newCamera = new THREE.Vector3(-0.2, 0, 0)
          setCameraPosition('near')
        } else {
          newPosition = initialPosition
          newCamera = new THREE.Vector3(0, 0, 0)
          setCameraPosition('far')
        }
        tl.to(
          camera.position,
          {
            duration: 2,
            x: newPosition.x,
            y: newPosition.y,
            z: newPosition.z,
            onComplete: () => {
              setShowRandom((prevShowRandom) => !prevShowRandom)
              setShowStorage((prevShowStorage) => !prevShowStorage)
              setShowFriend((prevShowFriend) => !prevShowFriend)

              // setShowStorage(!showStorage) // 추가된 부분
            },
          },
          0,
        )
        tl.to(
          camera.rotation,
          {
            duration: 2,
            x: newCamera.x,
            y: newCamera.y,
            z: newCamera.z,
            onUpdate: () => {
              camera.updateProjectionMatrix()
            },
          },
          0,
        )
      }
    }

    function ufoClick(e) {
      const currentHour = new Date().getHours()
      // console.log(currentHour)
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObject(ufoRef.current)
      const intersects2 = raycaster.intersectObject(todayRef.current)

      if (intersects.length > 0 || intersects2.length > 0) {
        // UFO 위치에 따른 적절한 카메라 위치 계산
        const newPosition = new THREE.Vector3(1.8, 3, -7)

        tl.to(
          camera.position,
          {
            duration: 1.5,
            x: newPosition.x,
            y: newPosition.y,
            z: newPosition.z,
            onUpdate: () => {
              camera.updateProjectionMatrix()
              const fadeOutDiv = document.getElementById('fade-out-div')
              if (fadeOutDiv) {
                gsap.to(fadeOutDiv.style, {
                  duration: 1.0,
                  opacity: 1,
                  onComplete: () => {
                    // console.log(currentHour)
                    if (currentHour >= 18 || currentHour <= 6) {
                      router.push('/today/arrive')
                    } else {
                      router.push('/today/delivery')
                    }
                  },
                })
              }
            },
          },
          0,
        )
        tl.to(
          camera.rotation,
          {
            duration: 2,
            x: 0.3,
            y: 0,
            z: 0,
            onUpdate: () => {
              camera.updateProjectionMatrix()
            },
          },
          0,
        )
      }
    }

    window.addEventListener('click', tableClick)
    window.addEventListener('click', storageClick)
    window.addEventListener('click', ufoClick)

    return () => {
      window.removeEventListener('click', tableClick)
      window.removeEventListener('click', storageClick)
      window.removeEventListener('click', ufoClick)
    }
  }, [camera, cameraPosition])

  // 랜덤, 친구 버튼 클릭
  useEffect(() => {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    function friendClick(e) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(mouse, camera)

      // friendMeshRef.current 가 유효한 경우에만 intersectObjects 호출
      if (friendRef.current) {
        const intersects = raycaster.intersectObjects([friendRef.current])

        if (intersects.length) {
          window.location.href = '/storage/friend'
        }
      }
    }

    function randomClick(e) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(mouse, camera)

      // friendMeshRef.current 가 유효한 경우에만 intersectObjects 호출
      if (randomRef.current) {
        const intersects = raycaster.intersectObjects([randomRef.current])

        if (intersects.length) {
          window.location.href = '/storage/random'
        }
      }
    }

    window.addEventListener('click', friendClick)
    window.addEventListener('click', randomClick)

    return () => {
      window.removeEventListener('click', friendClick)
      window.removeEventListener('click', randomClick)
    }
  }, [])

  return (
    <>
      {/* <OrbitControls /> */}
      <Planet1 />
      <Planet2 />
      <Planet3 />
      <SpaceShip forwardedRef={spaceshipRef} />
      <TodayComponent forwardedRef={todayRef} />
      <WriteComponent forwardedRef={writeRef} />
      {showStorage && <StorageComponent forwardedRef={storageRef} />}
      {showRandom && <RandomComponent forwardedRef={randomRef} />}
      {showFriend && <FriendComponent forwardedRef={friendRef} />}
      {/* <StorageComponent /> */}
      <Ufo forwardedRef={ufoRef} />
      <Table forwardedRef={tableRef} />
    </>
  )
}

function ThreeComponent({ style }) {
  return (
    <div style={style}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
      <div
        id="fade-out-div"
        style={{
          position: 'fixed',
          zIndex: 20,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          opacity: 0,
        }}
      ></div>
    </div>
  )
}

export default ThreeComponent
