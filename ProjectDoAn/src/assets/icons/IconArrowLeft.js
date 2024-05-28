import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconArrowUp = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 -4.5 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.708 10.634c.39-.405.39-1.06 0-1.464L11.444.607a1.95 1.95 0 0 0-2.827 0L.292 9.232c-.385.4-.39 1.048-.01 1.454a.976.976 0 0 0 1.425.01l7.617-7.893a.975.975 0 0 1 1.414 0l7.557 7.83a.974.974 0 0 0 1.413 0"
      fill={props?.color||"#007AFE"}
      fillRule="evenodd"
    />
  </Svg>
)

export default IconArrowUp
