import * as React from "react"
import Svg, { SvgProps, Path, G } from "react-native-svg";

const IconContent = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 -3 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      stroke="#000"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M1 1h18M1 7h13M1 13h8" />
    </G>
  </Svg>
)

export default React.memo(IconContent)
