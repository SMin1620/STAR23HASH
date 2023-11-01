import Link from 'next/link'
export default function yes() {
  return (
    <div>
      <div
        style={{ marginTop: '780px' }}
        className="mt-20 flex items-center justify-center pt-20 text-2xl text-white"
      >
        편지가 도착했어요~
      </div>
      <div
        style={{ marginTop: '150px', flexDirection: 'column' }}
        className="mt-20 flex items-center justify-center pt-20 text-2xl text-white"
      >
        <div
          style={{
            backgroundColor: '#FFE189',
            borderRadius: '10px',
            color: 'black',
            width: '100px',
            height: '50px',
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          <Link href="/today/tstorage/todayLinkStorage">친구</Link>
        </div>
        <div
          style={{
            backgroundColor: '#FFE189',
            borderRadius: '10px',
            color: 'black',
            width: '100px',
            height: '50px',
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          <Link href="/today/tstorage/todayLinkStorage">랜덤</Link>
        </div>
        <div
          style={{
            backgroundColor: '#FFE189',
            borderRadius: '10px',
            color: 'black',
            width: '100px',
            height: '50px',
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          <Link href="/today/tstorage/todayLinkStorage">링크</Link>
        </div>

        {/* <div>친구</div>
          <div>랜덤</div>
          <div>링크</div> */}
      </div>
    </div>
  )
}
