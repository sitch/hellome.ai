import React from "react"

import Text from "@emails/components/Text"
import { fontFamily, fontSize, fontWeight, lineHeight } from "@emails/theme"

type HeadingProps = React.ComponentProps<typeof Text>

const defaultProps = {
  fontFamily: fontFamily.sans,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.tight,
  fontSize: fontSize.xl,
}

export default function Heading(props: HeadingProps) {
  return (
    <Text {...defaultProps} {...props}>
      {props.children}
    </Text>
  )
}
