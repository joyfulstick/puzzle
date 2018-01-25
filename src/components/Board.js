// @flow

import React, { Component } from 'react'
import Rows from './Rows'
import { pieces } from '../assets/pieces'
import { changePiecesOrder } from '../lib/utility'

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
    pieces,
    draging: {
      startIndex: -1,
    },
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
    const newOrder = changePiecesOrder(
      this.state.pieces,
      this.state.draging.startIndex,
      enterIndex,
    )
    this.setState({
      ...this.state,
      pieces: newOrder,
      draging: {
        ...this.state.draging,
        startIndex: enterIndex,
      },
    })
  }
  render() {
    this.state.pieces.indexOf(this)
    return (
      <Rows
        dragStart={this.handleDragStart}
        dragEnter={this.handleDragEnter}
        pieces={this.state.pieces}
      />
    )
  }
}

export default Board
