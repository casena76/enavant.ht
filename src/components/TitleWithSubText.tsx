import React, { CSSProperties } from 'react'
import Colors from 'utils/colors'

interface Props {
  title: string,
  subText?: string,
  containerStyle?: CSSProperties,
  titleStyle?: CSSProperties,
  subTextStyle?: CSSProperties,
}
export default function TitleWithSubText({
  title, subText, containerStyle, titleStyle, subTextStyle
}: Props) {
  return (
    <div style={{
      textAlign: "center",
      marginTop: 100,
      marginBottom: 45,
      ...containerStyle
    }}>
      <h2 style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.orange,
        textTransform: "uppercase",
        ...titleStyle
      }} dangerouslySetInnerHTML={{ __html: title }}
      />
      {!!subText && (
        <div style={{
          color: Colors.gray,
          fontSize: 11,
          ...subTextStyle
        }}
          dangerouslySetInnerHTML={{ __html: subText }}
        />
      )}
    </div>
  )
}