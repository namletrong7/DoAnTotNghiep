import * as React from "react"
import Svg, { SvgProps, Path, Defs, G } from "react-native-svg";

const IconComputer = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G data-name="Layer 28">
      <Path d="M28 21h-1V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v14H4a1 1 0 0 0-1 1 5 5 0 0 0 5 5h16a5 5 0 0 0 5-5 1 1 0 0 0-1-1ZM7 8h18v13H7Zm17 17H8a3 3 0 0 1-2.83-2h21.66A3 3 0 0 1 24 25Z" />
      <Path d="m19 11.79-4.29 4.3-1.71-1.8a1 1 0 0 0-1.42 1.42l2.5 2.5a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0-1.5-1.42Z" />
    </G>
  </Svg>
)

export default IconComputer
