import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconUnBookMark = (props) => (
    <Svg
        width={20}
        height={20}
        viewBox="-0.5 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          d="M15.6 3.92a5.37 5.37 0 0 0-3.6 1.4 5.38 5.38 0 0 0-9 4c0 6.45 9 10.82 9 10.82s9-4.37 9-10.82a5.4 5.4 0 0 0-5.4-5.4Z"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
      />
    </Svg>
)

export default IconUnBookMark
