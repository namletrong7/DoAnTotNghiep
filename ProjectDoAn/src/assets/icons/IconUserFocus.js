import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

const IconUserFocus = (props) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <Circle cx={12} cy={6} r={4} fill="#007AFE" />
    <Path
      d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
      fill="#007AFE"
    />
  </Svg>
)

export default React.memo(IconUserFocus)
