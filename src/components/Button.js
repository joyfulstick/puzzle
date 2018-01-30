// @flow

import React from 'react'

const Button = (props: any) => (
  <button onClick={props.clicked}>{props.children}</button>
)

export default Button
