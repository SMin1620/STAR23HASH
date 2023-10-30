type Position = [number, number, number]

export default function RandomPosition(
  positions: Position[],
  positionRange: number,
  maxAttempts: number,
): Position {
  const newPosition: Position = [0, 0, 0]

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    newPosition[0] = (Math.random() - 0.5) * positionRange * 2
    newPosition[1] = (Math.random() - 0.5) * positionRange * 2
    newPosition[2] = (Math.random() - 0.5) * positionRange * 2

    let hasCollision = false
    for (const position of positions) {
      const distance = Math.sqrt(
        Math.pow((position[0] = newPosition[0]), 2) +
          Math.pow((position[1] = newPosition[1]), 2) +
          Math.pow((position[2] = newPosition[2]), 2),
      )
      if (distance < 2.0) {
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
