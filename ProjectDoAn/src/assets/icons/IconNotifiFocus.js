import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconNotifiFocus = (props) => (
  <Svg
      width={30}
      height={30}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <Path
      opacity={0.5}
      d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723c.452-.703.693-1.529.693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7Z"
      fill="#007AFE"
    />
    <Path
      d="M7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0Z"
      fill="#007AFE"
    />
  </Svg>
)

export default React.memo(IconNotifiFocus)
