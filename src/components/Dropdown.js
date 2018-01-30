// @flow

import React from 'react'

const Dropdown = (props: any) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(255,255,255,.2)',
    }}
    onClick={props.clicked}>
    {props.children}
  </div>
)

export default Dropdown
