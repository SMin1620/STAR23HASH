export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // viewport height로 설정하여 화면 전체를 채움
        width: '100vw', // viewport width로 설정하여 화면 전체를 채움
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경색을 검은색으로 설정하고, 약간 투명하게 설정
      }}
    >
      <h2 className="text-2xl text-white">Loading</h2>
    </div>
  )
}
