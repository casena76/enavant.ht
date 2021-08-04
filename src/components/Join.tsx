import React, { CSSProperties } from 'react'

import Colors from 'utils/colors'
import { useRouter } from 'next/router'
import Button from './Button'

interface Props {
  style?: CSSProperties,
}

export default function Join({ style }: Props) {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push('/adherer')}
      title="Adhérer"
      style={{
        backgroundColor: Colors.orange,
        color: Colors.white,
        fontWeight: 'bold',
        ...style
      }}
    />
  )
}