import React, { CSSProperties, ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import colors from 'utils/colors'

interface Props {
  href: string,
  as?: string,
  className?: string,
  onClick?: () => void,
  style?: CSSProperties
  children: ReactNode
}

export default ({ href, as, style, children, ...props }: Props) => {
  const router = useRouter()

  let linkStyle: CSSProperties = { textDecoration: 'none', ...style }

  if (router.pathname === href) {
    linkStyle.color = colors.orange,
      linkStyle.fontWeight = 'bold'
  }

  return <Link href={href} as={as}><a {...props} style={linkStyle}>{children}</a></Link>
}