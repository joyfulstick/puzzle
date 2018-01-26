// @flow

import React from 'react'

type Props = {
  children: any,
  dragEnter: (_: MouseEvent) => void,
  dragStart: (_: MouseEvent) => void,
}

const Piece = ({ children, dragStart, dragEnter }: Props) => (
  <div
    draggable
    onDragStart={dragStart}
    onDragEnter={dragEnter}
    style={{
      background: '#999',
      width: '100px',
      height: '100px',
      display: 'inline-block',
    }}>
    {children}
  </div>
)

export default Piece
