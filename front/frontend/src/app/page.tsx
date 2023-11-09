'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  // useEffect(() => {
  //   router.push('/auth/loginMain')
  // }, [])

  return router.push('/auth/loginMain')
}
