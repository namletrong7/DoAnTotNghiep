import * as React from "react"
import Svg, { SvgProps, Path, Defs, RadialGradient, Stop } from "react-native-svg";

const IconReport = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.333 3.667H3.667v14.667h14.666V3.667ZM14.667 10.084v5.5M11 6.417v9.167M7.333 12.834v2.75"
      stroke="#007AFE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default React.memo(IconReport)
