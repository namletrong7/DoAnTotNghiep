import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconEmptytask = (props) => (
    <Svg
        width={160}
        height={103}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="etask-icon undefined"
        {...props}
    >
      <Path
          d="M137.141 35.075 111.934 6.498c-1.21-1.947-2.976-3.125-4.837-3.125H52.903c-1.86 0-3.627 1.177-4.837 3.123l-25.207 28.58V58.03h114.282V35.074z"
          fill="#99CCFF"
      />
      <Path
          d="M103.882 42.953c0-3.988 2.47-7.28 5.533-7.282h27.726V80.73c0 5.274-3.28 9.597-7.329 9.597H30.188c-4.05 0-7.329-4.325-7.329-9.597V35.67h27.726c3.063 0 5.533 3.288 5.533 7.275V43c0 3.987 2.496 7.207 5.557 7.207h36.65c3.06 0 5.557-3.25 5.557-7.237v-.017z"
          fill="white"
      />
    </Svg>
)

export default IconEmptytask
