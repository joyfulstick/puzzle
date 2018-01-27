export const pieces = Array.from({ length: 49 }, (v, id) => {
  return { id }
})

export const columns = Math.sqrt(pieces.length)

export const boardSize = columns * 100
