// @flow

import React, { Component } from 'react'
import Rows from '../components/Rows'
import { pieces, boardSize } from '../assets/pieces'
import { changeOrder, shuffle } from '../lib/utility'

type State = {
  pieces: {
    id: number,
  }[],
  draging: {
    startIndex: number,
  },
}

class Board extends Component<{}, State> {
  state = {
    pieces: shuffle(pieces),
    draging: {
      startIndex: -1,
    },
  }

  handleDragStart = (e: MouseEvent, index: number) => {
    const startIndex = index
    this.setState({
      draging: {
        startIndex,
      },
    })
  }

  handleDragEnter = (e: MouseEvent, index: number) => {
    const enterIndex = index
    if (this.state.draging.startIndex === index) return
    const newOrder = changeOrder(
      this.state.pieces,
      this.state.draging.startIndex,
      enterIndex,
    )
    this.setState({
      pieces: newOrder,
      draging: {
        startIndex: enterIndex,
      },
    })
  }
  render() {
    const pieceId = this.state.pieces.map(e => e.id),
      pieceIndex = pieces.map((e, i) => i)
    return (
      <div
        style={{
          position: 'absolute',
          left: `calc((100% - ${boardSize}px) / 2`,
          top: '50px',
        }}>
        <Rows
          dragStart={this.handleDragStart}
          dragEnter={this.handleDragEnter}
          pieces={this.state.pieces}
        />
        {pieceId.toString() === pieceIndex.toString() && (
          <p
            style={{
              fontSize: '2rem',
              color: '#3f6',
              boxShadow: '0 0 4em #6f6',
              width: `${boardSize}px`,
              position: 'fixed',
              top: '160px',
              background: 'rgba(255,255,255,.9)',
              textAlign: 'center',
            }}>
            You Did It! Congratulations!
          </p>
        )}
      </div>
    )
  }
}

export default Board
