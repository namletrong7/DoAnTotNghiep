import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

const IconClose2 = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      opacity={0.5}
      cx={12}
      cy={12}
      r={10}
      stroke="#1C274C"
      strokeWidth={1.5}
    />
    <Path
      d="m14.5 9.5-5 5m0-5 5 5"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
)

export default IconClose2
