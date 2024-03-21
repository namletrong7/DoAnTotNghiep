import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

const IconUserUnFocus = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <Circle cx={12} cy={6} r={4} stroke="#1C274C" strokeWidth={1.5} />
    <Path
      opacity={0.5}
      d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
      stroke="#1C274C"
      strokeWidth={1.5}
    />
  </Svg>
)

export default React.memo(IconUserUnFocus)
