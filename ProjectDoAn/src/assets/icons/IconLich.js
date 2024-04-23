import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconLich = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M20.667 4.667H3.333C2.597 4.667 2 5.264 2 6v14.667C2 21.403 2.597 22 3.333 22h17.334c.736 0 1.333-.597 1.333-1.333V6c0-.736-.597-1.333-1.333-1.333ZM2 8.667h20M7.333 2v2.667M16.667 2v2.667M8.667 11.333v8M15.333 11.333v8M4.667 15.333h14.666"
      stroke="#7B7B85"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default React.memo(IconLich)
