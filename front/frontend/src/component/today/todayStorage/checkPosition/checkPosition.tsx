export type Position = [number, number, number]

export const calculateDistance = (pos1: Position, pos2: Position): number => {
  const dx = pos1[0] - pos2[0]
  const dy = pos1[1] - pos2[1]
  const dz = pos1[2] - pos2[2]
  return Math.sqrt(dx * dx + dy * dy + dz * dz)
}

export const checkMinDistance = (
  positions: Position[],
  newPosition: Position,
  minDistance: number,
): boolean => {
  for (const position of positions) {
    if (calculateDistance(position, newPosition) < minDistance) {
      return false
    }
  }
  return true
}
