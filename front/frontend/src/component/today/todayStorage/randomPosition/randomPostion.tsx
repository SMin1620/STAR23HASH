export type Position = [number, number, number]

export default function RandomPosition(
  positions: Position[],
  positionRange: number,
  maxAttempts: number,
  minDistance: number,
  allowedRange: number,
): Position {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const newPosition: Position = [
      (Math.random() - 0.5) * allowedRange,
      (Math.random() - 0.5) * allowedRange,
      (Math.random() - 0.5) * allowedRange,
    ]

    let hasCollision = false
    for (const position of positions) {
      const deltaX = position[0] - newPosition[0]
      const deltaY = position[1] - newPosition[1]
      const deltaZ = position[2] - newPosition[2]
      const distance = Math.sqrt(
        deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ,
      )

      if (distance < minDistance) {
        hasCollision = true
        break
      }
    }
    if (!hasCollision) {
      return newPosition
    }
  }
  return [0, 0, 0]
}
