import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Test from '@/component/Three/test'
import Script from 'next/script'
import Head from 'next/head' // 추가됨

import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../public/fonts/Dovemayo_gothic.ttf',
  display: 'swap',
})
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '별이삼샵',
  description: '익명 편지 전달 서비스',
  image: `https://star23shop-bucket.s3.ap-northeast-2.amazonaws.com/image.png`,
  url: `http://k9e106.p.ssafy.io/`,
}
declare global {
  interface Window {
    Kakao: any
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr" className={myFont.className}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
      </Head>
      <body>
        {children}
        <div id="modal-root" />
        <Test
          style={{
            top: '0',
            position: 'absolute',
            width: '100%',
            height: '100vh',
            zIndex: -999,
          }}
        />
      </body>
      <script src="https://developers.kakao.com/sdk/js/kakao.js" async />
    </html>
  )
}
