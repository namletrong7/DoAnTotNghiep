import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconArrowRight = (props) => (
  <Svg
    width={30}
    height={39}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.5}
      d="M4 11.25a.75.75 0 0 0 0 1.5v-1.5Zm0 1.5h16v-1.5H4v1.5Z"
      fill="#0099FF"
    />
    <Path
      d="m14 6 6 6-6 6"
      stroke="#0099FF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default IconArrowRight
