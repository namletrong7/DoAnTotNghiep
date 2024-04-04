import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconUnLike = (props) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          d="M8 10v10m0-10H4v10h4m0-10 5.196-6.062a2 2 0 0 1 2.003-.638l.048.012a2 2 0 0 1 1.179 3.05L14 10h4.56a2 2 0 0 1 1.962 2.392l-1.2 6A2 2 0 0 1 17.36 20H8"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
      />
    </Svg>
)

export default IconUnLike
