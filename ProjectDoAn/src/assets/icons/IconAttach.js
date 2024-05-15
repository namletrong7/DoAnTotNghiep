import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconAttach = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.333 7.333v4c0 2.667-.666 3.334-3.333 3.334H4.333C1.667 14.667 1 14 1 11.333V4.667C1 2 1.667 1.333 4.333 1.333h1c1 0 1.22.294 1.6.8l1 1.334C8.187 3.8 8.333 4 9 4h2c2.667 0 3.333.667 3.333 3.333Z"
      stroke="#4F4F4F"
      strokeMiterlimit={10}
    />
    <Path
      d="M5.333 1.333h6c1.334 0 2 .667 2 2v.92M9.333 10H6"
      stroke="#4F4F4F"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default IconAttach
