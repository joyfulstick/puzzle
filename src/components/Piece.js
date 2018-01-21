// @flow

import React, { Component } from 'react'

const pieces = Array.from({ length: 5 }, (v, id) => {
  return { id }
})

type State = {
  pieces: {
    id: number,
  }[],
  draging: {
    startIndex: number,
  },
}

class Piece extends Component<void, State> {
  state = {
    pieces,
    draging: {
      startIndex: -1,
    },
  }

  changePiecesOrder = (
    pieces: { id: number }[],
    startIndex: number,
    enterIndex: number,
  ) => {
    const updetedPieces = [...pieces],
      switchPiece = updetedPieces.splice(startIndex, 1)
    updetedPieces.splice(enterIndex, 0, ...switchPiece)
    this.setState({
      ...this.state,
      pieces: updetedPieces,
      draging: {
        ...this.state.draging,
        startIndex: enterIndex,
      },
    })
    console.log(`${startIndex} => ${enterIndex}`)
  }

  handleDragStart = (e: MouseEvent, index: number) => {
    const startIndex = index
    this.setState({
      ...this.state,
      draging: {
        ...this.state.draging,
        startIndex,
      },
    })
  }

  handleDragEnter = (e: MouseEvent, index: number) => {
    const enterIndex = index
    if (this.state.draging.startIndex === index) return
    this.changePiecesOrder(
      this.state.pieces,
      this.state.draging.startIndex,
      enterIndex,
    )
  }

  render() {
    return this.state.pieces.map((piece, index) => (
      <div
        key={piece.id}
        id={piece.id}
        draggable
        onDragStart={e => this.handleDragStart(e, index)}
        onDragEnter={e => this.handleDragEnter(e, index)}
        style={{
          background: '#999',
          width: '100px',
          height: '100px',
          display: 'inline-block',
          margin: '10px',
        }}>
        {`p-${piece.id}`}
      </div>
    ))
  }
}

export default Piece
