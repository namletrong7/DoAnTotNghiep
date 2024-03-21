import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconPin = (props) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5v-4Zm5-3a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3H5Zm5 4a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2ZM6 9a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2Z"
          fill="#000"
      />
    </Svg>
)

export default React.memo(IconPin)
