import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconMessage = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5 16.55v3.35a2.1 2.1 0 0 0 3.54 1.53l2.61-2.46h.87c5.52 0 10-3.8 10-8.5s-4.48-8.5-10-8.5-10 3.81-10 8.5a7.93 7.93 0 0 0 3 6.06l-.02.02Z"
      stroke="#0099FF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default IconMessage
