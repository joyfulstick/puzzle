// @flow

import React, { Component } from 'react'
import Rows from '../components/Rows'
import { pieces, boardSize } from '../assets/pieces'
import { changeOrder, shuffle } from '../lib/utility'
import Dropdown from '../components/Dropdown'
import Button from '../components/Button'
import Preview from '../assets/image/puzzle.jpg'

type State = {
  pieces: {
    id: number,
  }[],
  draging: {
    startIndex: number,
  },
  preview: boolean,
}

class Board extends Component<{}, State> {
  state = {
    pieces: shuffle(pieces),
    draging: {
      startIndex: -1,
    },
    preview: false,
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
  handlePreview = () =>
    this.setState(prevState => {
      return { preview: !prevState.preview }
    })
  render() {
    const pieceId = this.state.pieces.map(e => e.id),
      pieceIndex = pieces.map((e, i) => i)
    return (
      <main
        style={{
          position: 'absolute',
          left: `calc((100% - ${boardSize}px) / 2`,
          top: '5vh',
        }}>
        <Rows
          dragStart={this.handleDragStart}
          dragEnter={this.handleDragEnter}
          pieces={this.state.pieces}
        />
        <Button clicked={this.handlePreview}>Preview</Button>
        {this.state.preview && (
          <Dropdown clicked={this.handlePreview}>
            <img
              style={{ border: '10vh solid whiteSmoke' }}
              src={Preview}
              alt="Preview"
            />
          </Dropdown>
        )}
        {pieceId.toString() === pieceIndex.toString() && (
          <Dropdown>
            <p
              style={{
                fontSize: '2rem',
                color: '#3f6',
                boxShadow: '0 0 4em #6f6',
                width: `${boardSize}px`,
                position: 'fixed',
                top: '20vh',
                background: 'rgba(255,255,255,.9)',
                textAlign: 'center',
              }}>
              You Did It! Congratulations!
            </p>
          </Dropdown>
        )}
      </main>
    )
  }
}

export default Board
