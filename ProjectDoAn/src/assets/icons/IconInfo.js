import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

const IconFor = (props) => (
  <Svg
    width={25}
    height={25}
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
      d="M12 17v-6"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle
      cx={1}
      cy={1}
      r={1}
      transform="matrix(1 0 0 -1 11 9)"
      fill="#1C274C"
    />
  </Svg>
)

export default IconFor
