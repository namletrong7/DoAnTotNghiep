import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconContent2 = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 13h6M8 17h8M19 21H5V3h9l5 5v13Z"
      stroke="#007AFE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13 3v4c0 1 1 2 2 2h4"
      stroke="#007AFE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default IconContent2
