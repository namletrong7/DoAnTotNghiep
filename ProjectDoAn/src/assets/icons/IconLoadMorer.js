import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconLoadMore = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 20.75a7.25 7.25 0 1 1 0-14.5h2.5a.75.75 0 1 1 0 1.5H12a5.75 5.75 0 1 0 5.75 5.75.75.75 0 1 1 1.5 0A7.26 7.26 0 0 1 12 20.75Z"
      fill="#000"
    />
    <Path
      d="M12 10.75a.74.74 0 0 1-.53-.22.75.75 0 0 1 0-1.06L13.94 7l-2.47-2.47a.75.75 0 1 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.74.74 0 0 1-.53.22Z"
      fill="#000"
    />
  </Svg>
)

export default React.memo(IconLoadMore)
