// @flow

export const changeOrder = (
  pieces: { id: number }[],
  startIndex: number,
  enterIndex: number,
) => {
  const updetedPieces = [...pieces],
    swapPiece = updetedPieces.splice(startIndex, 1)
  updetedPieces.splice(enterIndex, 0, ...swapPiece)
  return updetedPieces
}

export const importAll = (require: any) => {
  let requireObject = {}
  require
    .keys()
    .map(item => (requireObject[item.replace('./', '')] = require(item)))
  return requireObject
}
