import React, { CSSProperties } from 'react'

import Colors from 'utils/colors'
import { useRouter } from 'next/router'
import Button from './Button'

interface Props {
  title?: string,
  style?: CSSProperties,
}

export default function Donate({ title, style }: Props) {
  const router = useRouter()

  const handleClick = () => {
    router.push('/don')
  }

  return (
    <Button
      onClick={() => handleClick()}
      title={title || "Faire un don"}
      style={{
        backgroundColor: Colors.orange,
        color: Colors.white,
        fontWeight: 'bold',
        ...style
      }}
    />
  )
}