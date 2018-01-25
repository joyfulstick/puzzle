// @flow

import React from 'react'
import Piece from './Piece'

type Props = {
  pieces: Object[],
  rowIndex: number,
  columns: number,
  dragStart: (_: MouseEvent, updatedIndex: number) => void,
  dragEnter: (_: MouseEvent, updatedIndex: number) => void,
}

const Row = ({ pieces, rowIndex, columns, dragStart, dragEnter }: Props) => {
  const newPieces = [...pieces],
    piecesInRow = newPieces.slice(rowIndex, rowIndex + columns)
  return piecesInRow.map((piece: any, index: number) => {
    const updatedIndex: number = index + rowIndex
    return (
      <Piece
        key={piece.id}
        dragStart={e => dragStart(e, updatedIndex)}
        dragEnter={e => dragEnter(e, updatedIndex)}>
        {`p-${piece.id}`}
      </Piece>
    )
  })
}

export default Row
