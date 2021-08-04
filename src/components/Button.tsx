import React, { CSSProperties } from 'react'

interface Props {
  title: string,
  style?: CSSProperties,
  onClick?: (event?: any) => any
}

export default function Button({ title, style, onClick }: Props) {
  return (
    <button style={{
      fontSize: 11,
      borderRadius: 20,
      textTransform: "uppercase",
      padding: "12px 24px",
      border: 0,
      outline: "none",
      ...style
    }}
      onClick={onClick}>{title}</button>
  )
}