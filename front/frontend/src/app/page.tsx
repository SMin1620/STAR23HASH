'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  // const router = useRouter()

  // useEffect(() => {
  //   router.push('/auth/loginMain')
  // }, [])

  return (
    <>
      <div className=" absolute z-10">
        <div className="Title">냠냠냠`</div>
        <div>
          <Link href={'/storage'}>보관함으로 가깅</Link>
        </div>
        <div>
          <Link className="Title" href={'/main'}>
            Three.js Test page 로 가기
          </Link>
        </div>
      </div>
    </>
  )
}
