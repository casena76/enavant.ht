import React, { CSSProperties } from 'react'
import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles({
  container: {
    maxWidth: 1140,
    margin: '0 auto',
    paddingLeft: 15,
    paddingRight: 15
  },
})

export default function Container({
  children,
  style,
  className
}: {
  children: React.ReactNode,
  style?: CSSProperties,
  className?: string
}) {
  const styles = useStyles()

  return (
    <div className={`${styles.container} ${className}`} style={style}>
      {children}
    </div>
  )
}