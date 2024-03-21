import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

const IconDate = () => (
  <Svg
    width={20}
    height={20}
    viewBox="-5.4 0 98.4 98.4"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G
      data-name="Group 4"
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={4}
    >
      <Path
        data-name="Path 52"
        d="M76.7 12.8H10.9A8.92 8.92 0 0 0 2 21.7v65.8a8.92 8.92 0 0 0 8.9 8.9h65.8a8.92 8.92 0 0 0 8.9-8.9V21.7a8.92 8.92 0 0 0-8.9-8.9Z"
      />
      <Path data-name="Line 25" d="M19.9 42.2h21.2" />
      <Path data-name="Line 26" d="M19.9 60.5h45.9" />
      <Path data-name="Line 27" d="M30.9 2v19.6" />
      <Path data-name="Line 28" d="M56.7 2v19.6" />
    </G>
  </Svg>
)

export default React.memo(IconDate)
