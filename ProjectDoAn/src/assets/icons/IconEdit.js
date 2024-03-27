import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconEdit = (props) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          d="M20.15 7.94 8.28 19.81c-1.06 1.07-4.23 1.56-5 .85-.77-.71-.21-3.88.85-4.95L16 3.84a2.9 2.9 0 0 1 4.1 4.1h.05ZM21 21h-9"
          stroke="#1062dc"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
      />
    </Svg>
)

export default IconEdit
