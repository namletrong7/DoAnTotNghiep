import * as React from "react"
import Svg, { SvgProps, Path, G } from "react-native-svg";

const IconPlus = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      data-name="add"
    >
      <Path d="M12 19V5M5 12h14" />
    </G>
  </Svg>
)

export default IconPlus
