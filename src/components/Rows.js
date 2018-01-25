// @flow

import React from 'react'
import Row from './Row'
import { columns } from '../assets/pieces'

type Props = {
  pieces: Object[],
  dragStart: (_: MouseEvent, updatedIndex: number) => void,
  dragEnter: (_: MouseEvent, updatedIndex: number) => void,
}

const Rows = ({ pieces, dragEnter, dragStart }: Props) => {
  const rows = []
  pieces.forEach((piece: any, index) => {
    index % columns === 0 &&
      rows.push(
        <div key={piece.id}>
          <Row
            rowIndex={index}
            columns={columns}
            pieces={pieces}
            dragStart={dragStart}
            dragEnter={dragEnter}
          />
        </div>,
      )
  })
  return rows
}

export default Rows
