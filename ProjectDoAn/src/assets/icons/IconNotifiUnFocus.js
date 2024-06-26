import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconNotifiUnFocus = (props) => (
  <Svg
      width={25}
      height={25}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <Path
      d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.775 25.775 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"
      stroke="#1C274C"
      strokeWidth={1.5}
    />
    <Path
      opacity={1}
      d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
)

export default React.memo(IconNotifiUnFocus)
