export const pieces = Array.from({ length: 16 }, (v, id) => {
  return { id }
})

export const columns = Math.sqrt(pieces.length)
