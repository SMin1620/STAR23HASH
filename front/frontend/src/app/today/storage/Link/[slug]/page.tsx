'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { Float, OrbitControls, SpotLight, Stars } from '@react-three/drei'
import UfoModel from '../../../../../component/today/todayStorage/link/ufoModel/ufoModel'
import PlanetModel from '../../../../../component/today/todayStorage/link/planetModel/planetModel'
import AstronautModel from '../../../../../component/today/todayStorage/link/astronautModel/astronautModel'
import GradientBackground from '../../../../../component/Three/three.styled'
import {
  Position,
  checkMinDistance,
} from '../../../../../component/today/todayStorage/checkPosition/checkPosition'
import Light from '@/component/today/todayStorage/light/light'
import LinkListGet from '@/app/utils/todayStorage/link/linkListGet'
import { LinkDetailGet } from '@/app/utils/todayStorage/link/linkDetailGet'
import ShareButton from '@/component/today/todayStorage/link/shareButton/shareButton'
import {
  HtmlContainer,
  LinkContainer,
  LinkButton,
  BackButton,
  Guide,
  BtnContainer,
  WriteButton,
} from './link.styled'
import { useRouter } from 'next/navigation'
import { check } from 'prettier'
import { MakeLinkAxios } from '@/app/utils/main/makeLinkAxios'
import KaKaoShareButton from '@/component/common/kakaoShareButton/kakaoShareButton'

type Props = {
  params: {
    slug: number
  }
}

export default function TodayLinkStorage({ params }: Props) {
  const [rollList, setRollList] = useState<null | any>(null)
  const [rollDetail, setRollDetail] = useState<null | any>(null)
  const [isUser, setIsUser] = useState(false)
  const [positions, setPositions] = useState<Position[]>([])
  const [positionSet, setPositionSet] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleListApi = async (id: number) => {
      const response = await LinkListGet(id)
      console.log(response.data.data)

      setRollList(response.data.data)
    }
    handleListApi(params.slug)
  }, [])

  const handleDetailApi = async (id: number) => {
    const response = await LinkDetailGet(id)
    console.log(response.data.data)

    setRollDetail(response.data.data)
    router.push(`/today/storage/Link/${params.slug}/${id}`)
  }

  const getCookieValue = (name: string): string | null => {
    if (typeof window !== 'undefined') {
      const cookieName = name + '='
      const decodedCookie = decodeURIComponent(document.cookie)
      const cookieArray = decodedCookie.split(',')

      for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].trim()
        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length)
        }
      }
    }
    return null
  }

  useEffect(() => {
    const accessToken = getCookieValue('accessToken')
    // 토큰 없으면 바로 비회원
    if (accessToken === null) {
      setIsUser(false)
    } else {
      // 토큰 있을땐, 현재 토큰이 가진 rollID랑 params.slug랑 비교해서
      // 맞는지 다른지 확인
      const check = async () => {
        const checkRoll = await MakeLinkAxios()
        setIsUser(true)
        //일치함
        if (checkRoll.data.rollId == params.slug) {
          const handleListApi = async (id: number) => {
            const response = await LinkListGet(id)
            setRollList(response.data.data)
            console.log('RollList ', response.data.data)
          }
          handleListApi(params.slug)
        }
        //다름
        else {
          setIsUser(false)
        }
      }
      check()
    }
  }, [])

  useEffect(() => {
    if (rollList && !positionSet) {
      const totalAmount = rollList.paperList.length
      const newPositions: Position[] = []
      for (let i = 0; i < totalAmount; i++) {
        newPositions.push([
          Math.random() * 2 - 1,
          Math.random() * 3 - 2,
          Math.random() * 3 - 2,
        ])
      }
      setPositions(newPositions)
      setPositionSet(true)
      console.log(totalAmount)
    }
  }, [rollList])

  const handleShare = () => {
    const currentUrl = window.document.location.href
    console.log(currentUrl)
    const t = document.createElement('textarea')
    document.body.appendChild(t)
    t.value = currentUrl
    t.select()
    document.execCommand('copy')
    document.body.removeChild(t)

    alert('링크가 복사되었습니당!')
  }

  const goWrite = () => {
    router.push(`/today/storage/Link/${params.slug}/write`)
  }

  const goBack = () => {
    router.back()
  }

  // const minDistance = 2
  // const [astronautPositions, setAstronautPostions] = useState<Position[]>([])

  // useEffect(() => {
  //   const positions: Position[] = []
  //   for (let i = 0; i < totalAmount; i++) {
  //     let newPosition
  //     do {
  //       newPosition = [
  //         Math.random() * 2 - 1,
  //         Math.random() * 3 - 2,
  //         Math.random() * 3 - 2,
  //       ] as Position
  //     } while (!checkMinDistance(positions, newPosition, minDistance))
  //     positions.push(newPosition)
  //   }
  //   setAstronautPostions(positions)
  // }, [])

  return (
    <LinkContainer>
      <Canvas
        style={{
          width: '100vw',
          height: '100vh',
          position: 'relative',
          zIndex: '1',
        }}
        camera={{ position: [0, 2.2, 5], fov: 70 }}
      >
        <Light />
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <Float
            speed={6}
            rotationIntensity={0}
            floatIntensity={1}
            floatingRange={[0, 0.1]}
          >
            <UfoModel
              url="/assets/other/ufo.glb"
              scale={[1.6, 1.6, 1.6]}
              position={[0, 2.5, 0]}
            />
          </Float>
          <SpotLight
            color="#feff16"
            distance={10}
            angle={0.9}
            attenuation={5}
            anglePower={3}
            position={[0, 3.1, 0]}
          />
          {rollList?.paperList &&
            rollList.paperList.map(
              (item: any, index: number) =>
                !item.isRead && (
                  <Float key={index} speed={1} floatIntensity={0.1}>
                    <AstronautModel
                      url={`/assets/astronaut${item.icon}.glb`}
                      scale={[0.3, 0.3, 0.3]}
                      position={positions[index]}
                      onClick={() => handleDetailApi(item.id)}
                    />
                  </Float>
                ),
            )}
          <PlanetModel
            url="/assets/planet/planet-1.glb"
            scale={[4, 4, 4]}
            position={[0, -6, 0]}
          />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <HtmlContainer>
        <BtnContainer>
          {isUser ? (
            <LinkButton onClick={() => handleShare()}>링크복사</LinkButton>
          ) : (
            <WriteButton onClick={() => goWrite()}>글쓰기</WriteButton>
          )}
          {isUser && <BackButton onClick={() => goBack()}>뒤로가기</BackButton>}
          {isUser && <KaKaoShareButton />}
        </BtnContainer>
        <Guide>화면을 움직일 수 있어요!</Guide>
      </HtmlContainer>
    </LinkContainer>
  )
}
