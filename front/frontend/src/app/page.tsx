import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="Title">냠냠냠`</div>
      <div>
        <Link href={'/storage'}>보관함으로 가깅</Link>
      </div>
      <div>
        <Link className="Title" href={'/main'}>
          Three.js Test page 로 가기
        </Link>
      </div>
    </>
  )
}
