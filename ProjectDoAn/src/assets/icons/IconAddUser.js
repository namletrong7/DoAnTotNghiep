import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconAddUser = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M9.877 15.206c-3.844 0-7.127.581-7.127 2.91 0 2.327 3.263 2.93 7.127 2.93 3.845 0 7.127-.583 7.127-2.91s-3.262-2.93-7.127-2.93Z"
      stroke="#130F26"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      clipRule="evenodd"
      d="M9.877 11.886A4.568 4.568 0 1 0 5.31 7.318a4.551 4.551 0 0 0 4.536 4.568h.03Z"
      stroke="#130F26"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.204 8.67v4.01M21.25 10.674h-4.09"
      stroke="#130F26"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default React.memo(IconAddUser)
