export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <h2 className="text-2xl text-white">Loading</h2>
    </div>
  )
}
