import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconNight = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3 17c7.952 1.618 13.683-8.242 8-14 5 .131 9 4.111 9 9 0 4.971-3.881 9-9 9-3.229 0-6.34-1.568-8-4Z"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
)

export default IconNight
