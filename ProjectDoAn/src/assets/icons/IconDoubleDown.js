import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconArrowDownDouble = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m19 5-6.293 6.293a1 1 0 0 1-1.414 0L5 5M19 13l-6.293 6.293a1 1 0 0 1-1.414 0L5 13"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default IconArrowDownDouble
