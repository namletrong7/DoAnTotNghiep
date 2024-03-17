import * as React from "react"
import Svg, { SvgProps, Path, Defs, RadialGradient, Stop } from "react-native-svg";

const IconCheck = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.396 21.792a9.396 9.396 0 0 1 0-18.792 9.253 9.253 0 0 1 4.98 1.411l-.905 1.452a7.572 7.572 0 0 0-4.075-1.154 7.688 7.688 0 1 0 7.688 7.687 8.459 8.459 0 0 0-.23-2.014l1.656-.413c.191.795.286 1.61.282 2.427a9.407 9.407 0 0 1-9.396 9.396Z"
      fill="#7B7B85"
    />
    <Path
      d="M11.396 14.959a.855.855 0 0 1-.604-.25l-4.02-4.021L7.979 9.48l3.417 3.417L20.792 3.5 22 4.709l-10 10a.855.855 0 0 1-.604.25Z"
      fill="#7B7B85"
    />
  </Svg>
)

export default React.memo(IconCheck)
