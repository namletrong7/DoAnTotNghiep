import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconDown = (props) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          opacity={0.1}
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          fill="#323232"
      />
      <Path
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          stroke="#323232"
          strokeWidth={2}
      />
      <Path
          d="M12 16V8M9 13l2.913 2.913v0a.123.123 0 0 0 .174 0v0L15 13"
          stroke="#323232"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
      />
    </Svg>
)

export default React.memo(IconDown)
