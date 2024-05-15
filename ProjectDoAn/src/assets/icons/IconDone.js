import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconDone = (props) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          d="m9 10 3.258 2.444a1 1 0 0 0 1.353-.142L20 5"
          stroke={props?.color || '#222'}
          strokeLinecap="round"
      />
      <Path d="M21 12a9 9 0 1 1-6.67-8.693" stroke={props?.color || '#222'} strokeLinecap="round" />
    </Svg>
)

export default IconDone
