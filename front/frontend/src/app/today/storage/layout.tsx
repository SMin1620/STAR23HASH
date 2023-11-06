'use client'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  useEffect(() => {
    const kakaoScript = document.createElement('script')
    kakaoScript.src = `https://developers.kakao.com/sdk/js/kakao.js`
    kakaoScript.async = true
    document.head.appendChild(kakaoScript)

    // kakaoScript.onload = () => {
    //   window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY)
    // }
  }, [])

  return <>{children}</>
}
export default Layout
