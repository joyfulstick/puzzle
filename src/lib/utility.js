export const changePiecesOrder = (
  pieces: { id: number }[],
  startIndex: number,
  enterIndex: number,
) => {
  const updetedPieces = [...pieces],
    swapPiece = updetedPieces.splice(startIndex, 1)
  updetedPieces.splice(enterIndex, 0, ...swapPiece)
  return updetedPieces
}
