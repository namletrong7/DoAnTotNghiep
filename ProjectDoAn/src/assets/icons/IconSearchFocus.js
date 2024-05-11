import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconSearchFocus = (props) => (
  <Svg
      width={30}
      height={30}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.1}
      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      fill="#007AFE"
    />
    <Path
      d="m15 15 6 6"
      stroke="#007AFE"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      stroke="#007AFE"
      strokeWidth={2}
    />
  </Svg>
)

export default React.memo(IconSearchFocus)
