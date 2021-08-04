import React, { CSSProperties } from 'react'

import NavBar from "./NavBar"
import Colors from 'utils/colors'

interface Props {
  style?: CSSProperties,
  showButtons?: boolean,
  containerStyle?: CSSProperties,
  footer?: boolean
}

export default function TransparentNavBar({ style, ...props }: Props) {
  return (
    <NavBar style={{
      color: Colors.white,
      paddingLeft: 0,
      paddingRight: 0,
      ...style
    }}
      transparent
      {...props}
    />
  )
}