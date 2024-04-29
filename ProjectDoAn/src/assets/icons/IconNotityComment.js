import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconNotityComment = (props) => (
  <Svg
    width={15}
    height={15}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16 0C7.164 0 0 6.269 0 14c0 4.419 2.345 8.354 6 10.919V32l7.009-4.253c.97.16 1.968.253 2.991.253 8.836 0 16-6.268 16-14 0-7.731-7.164-14-16-14"
      fill="white"
      fillRule="evenodd"
    />
  </Svg>
)

export default IconNotityComment
