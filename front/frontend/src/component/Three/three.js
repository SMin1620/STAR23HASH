'use client'
import { useEffect, useRef } from 'react'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'
import { Orbit } from 'next/font/google'
//카메라 천천ㅎ 이동하기 gsap
import { gsap } from 'gsap'

const ThreeComponent = ({ style }) => {
  const mountRef = useRef(null)
  // 클릭 상태 추적을 위한 변수
  const stateRef = useRef(0)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )

    const renderer = new THREE.WebGLRenderer()

    if (mountRef.current) {
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight,
      )
      mountRef.current.appendChild(renderer.domElement)

      // 사진배경
      // const backloader = new THREE.TextureLoader();
      // backloader.load('/assets/back.png', function(texture){
      //   scene.background = texture;
      // });

      // 그라데이션 배경

      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')

      const gradient = context.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#00023E')
      gradient.addColorStop(1, '#744472')

      context.fillStyle = gradient
      context.fillRect(0, 0, canvas.width, canvas.height)

      const texture = new THREE.CanvasTexture(canvas)

      scene.background = texture

      // const startloader = new THREE.TextureLoader();
      // startloader.load('/assets/starts.png', function(texture) {
      //   const geometry = new THREE.PlaneGeometry(100, 100);
      //   const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
      //   const plane = new THREE.Mesh(geometry, material);
      //   plane.position.z = -10;
      //   scene.add(plane);
      // });

      //controls
      const controls = new OrbitControls(camera, renderer.domElement)

      //조명
      const AmbientLigthtight = new THREE.AmbientLight('white', 2.5)
      AmbientLigthtight.position.z = 2
      scene.add(AmbientLigthtight)

      const light = new THREE.DirectionalLight('white', 6)
      light.position.y = 10
      light.position.x = 5
      scene.add(light)

      const lightHelper = new THREE.DirectionalLightHelper(light, 10)
      scene.add(lightHelper)

      //별 그리기
      const geometry = new THREE.BufferGeometry()
      const count = 1000
      const positions = new Float32Array(count * 3)
      for (let i = 0; i < positions.length; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 13 // x축
        positions[i * 3 + 1] = (Math.random() - 0.5) * 13 // y축
        positions[i * 3 + 2] = (Math.random() - 1) * 13 // z축
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const textureLoader = new THREE.TextureLoader()
      const particleTexture = textureLoader.load('/assets/star_04.png')
      const material = new THREE.PointsMaterial({
        size: 0.5,
        map: particleTexture,
        transparent: true,
        alphaMap: particleTexture,
        color: '#fff',
      })
      const particles = new THREE.Points(geometry, material)
      scene.add(particles)
      //별 그리기 끝

      // Load FBX file
      const loader = new FBXLoader()
      let planet1
      loader.load(
        '/assets/Planet-5.fbx',
        (loaderFbx) => {
          planet1 = loaderFbx
          // Adjust the position
          planet1.position.set(-5, 4.5, -10)
          // Adjust the size
          const scale = 0.028
          planet1.scale.set(scale, scale, scale)
          //회전
          planet1.rotation.x = 0.25
          // planet1.rotation.z = 0.5;
          planet1.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true // 물체가 그림자를 생성
              child.receiveShadow = true // 물체가 그림자를 받음
            }
          })
          scene.add(planet1)
        },
        undefined,
        function (error) {
          console.error(error)
        },
      )

      let planet2
      loader.load(
        '/assets/Planet-5.fbx',
        (loaderFbx) => {
          planet2 = loaderFbx
          // Adjust the position
          planet2.position.set(8, -3.5, -20)
          // Adjust the size
          const scale = 0.028
          planet2.scale.set(scale, scale, scale)
          //회전
          planet2.rotation.x = 0.4
          planet2.rotation.y = -0.3
          planet2.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true // 물체가 그림자를 생성
              child.receiveShadow = true // 물체가 그림자를 받음
            }
          })
          scene.add(planet2)
        },
        undefined,
        function (error) {
          console.error(error)
        },
      )

      // let planet2;
      // loader.load('/assets/planet11-3.fbx', (loaderFbx) => {
      //   planet2 = loaderFbx;
      //   // Adjust the position
      //   planet2.position.set(1.8, -2, -1);
      //   // Adjust the size
      //   const scale = 0.008;
      //   planet2.scale.set(scale, scale, scale);
      //   //회전
      //   planet2.traverse((child) => {
      //     if (child.isMesh) {
      //       child.castShadow = true;  // 물체가 그림자를 생성
      //       child.receiveShadow = true;  // 물체가 그림자를 받음
      //     }
      //   });
      //   scene.add(planet2);
      // }, undefined, function (error) {
      //   console.error(error);
      // });

      let ufo
      loader.load(
        '/assets/UFO.fbx',
        (loaderFbx) => {
          ufo = loaderFbx
          // Adjust the position
          ufo.position.set(1.8, 2, -5)
          // Adjust the size
          const scale = 0.008
          ufo.scale.set(scale, scale, scale)

          ufo.rotation.x = 0.2
          ufo.rotation.z = 0.2

          //회전
          ufo.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true // 물체가 그림자를 생성
              child.receiveShadow = true // 물체가 그림자를 받음
            }
          })
          scene.add(ufo)
        },
        undefined,
        function (error) {
          console.error(error)
        },
      )

      let planet3
      loader.load(
        '/assets/Planet-1.fbx',
        (loaderFbx) => {
          planet3 = loaderFbx
          planet3.position.set(-0.05, -5.5, 0)
          const scale = 0.05
          planet3.scale.set(scale, scale, scale)
          //회전
          planet3.rotation.x = 0.4
          planet3.rotation.y = -0.3
          planet3.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true // 물체가 그림자를 생성
              child.receiveShadow = true // 물체가 그림자를 받음
            }
          })
          scene.add(planet3)
        },
        undefined,
        function (error) {
          console.error(error)
        },
      )

      let table
      loader.load(
        '/assets/table.fbx',
        (loaderFbx) => {
          table = loaderFbx
          // Adjust the position
          table.position.set(0.5, -1.43, 0)
          // Adjust the size
          const scale = 0.005
          table.scale.set(scale, scale, scale)

          table.rotation.z = 0.8
          table.rotation.y = 0.1
          table.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true // 물체가 그림자를 생성
              child.receiveShadow = true // 물체가 그림자를 받음
            }
          })
          scene.add(table)
        },
        undefined,
        function (error) {
          console.error(error)
        },
      )

      camera.position.z = 5

      const mouse = new THREE.Vector2()
      console.log(mouse)

      //그리기
      const clock = new THREE.Clock()
      function draw() {
        renderer.render(scene, camera)
        renderer.setAnimationLoop(draw)
      }

      // 창 크기 바뀔때 창에 맞게 화면 변경
      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.render(scene, camera)
      }

      // 카메라의 초기 위치 저장
      let originalPosition = new THREE.Vector3()
      originalPosition.copy(camera.position)

      // table 클릭했을때, 카메라 이동!
      const raycaster = new THREE.Raycaster()
      function checkIntersects() {
        raycaster.setFromCamera(mouse, camera)
        const intersects = raycaster.intersectObjects([table])
        // table을 클릭했다면,
        if (intersects.length) {
          if (stateRef.current === 0) {
            let newPosition = new THREE.Vector3(0.7, -0.1, 1)
            // camera.position.lerp(intersects[0].point, 0.8);
            // camera.position.lerp(newPosition, 0.8);
            gsap.to(camera.position, {
              duration: 1.5, // 1.5초 이동
              x: newPosition.x,
              y: newPosition.y,
              z: newPosition.z,
              onUpdate: () => camera.updateProjectionMatrix(), // 카메라 위치가 변경될 때 마다 호출되는 함수 웩
            })
            gsap.to(camera.rotation, {
              duration: 1.5, // 1.5초 동안 회전
              x: -Math.PI / 3.8, // x 축으로 0도 회전
              onUpdate: () => camera.updateProjectionMatrix(), // 카메라 회전이 변경될 때 마다 호출되는 함수
            })
            // camera.rotation.x = -Math.PI / 3.8;
            stateRef.current = 1
            console.log(stateRef.current)
          } else if (stateRef.current === 1) {
            // 어느방향에서도 처음으로 돌아오고 싶은데 어케하노 시댕
            // originalPosition.copy(camera.position);
            // let newPosition = new THREE.Vector3(0.8,-0.1);
            // camera.position.lerp(originalPosition, 0.8);
            gsap.to(camera.position, {
              duration: 1.5, // 1.5초 이동
              x: originalPosition.x,
              y: originalPosition.y,
              z: originalPosition.z,
              rotation: -4,
              onUpdate: () => camera.updateProjectionMatrix(), // 카메라 위치가 변경될 때 마다 호출되는 함수 웩
            })
            gsap.to(camera.rotation, {
              duration: 1.5, // 1.5초 동안 회전
              x: 0, // x 축으로 0도 회전
              onUpdate: () => camera.updateProjectionMatrix(), // 카메라 회전이 변경될 때 마다 호출되는 함수
            })
            // camera.rotation.x = 0;
            stateRef.current = 0
          }
        }
      }

      window.addEventListener('resize', onWindowResize, false)
      renderer.domElement.addEventListener('click', (e) => {
        mouse.x = (e.clientX / mountRef.current.clientWidth) * 2 - 1
        mouse.y = -(e.clientY / mountRef.current.clientHeight) * 2 + 1
        console.log(mouse)
        checkIntersects()
      })

      draw()
    }
  }, [])

  return <div ref={mountRef} style={style} />
}

export default ThreeComponent
