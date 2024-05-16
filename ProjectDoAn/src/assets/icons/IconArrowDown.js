import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconArrowDown = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 -4.5 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.292.366c-.39.405-.39 1.06 0 1.464l8.264 8.563c.78.81 2.047.81 2.827 0l8.325-8.625c.385-.4.39-1.048.01-1.454a.976.976 0 0 0-1.425-.011l-7.617 7.893a.975.975 0 0 1-1.414 0L1.705.366a.974.974 0 0 0-1.413 0"
      fill="#007AFE"
      fillRule="evenodd"
    />
  </Svg>
)

export default IconArrowDown
