import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconLogOut(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m7 14l5-5m0 0l-5-5m5 5H9"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default IconLogOut
