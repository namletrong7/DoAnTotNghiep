import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconSend = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="icon multi-color"
  >
    <Path
      d="M18.5 13.66 5.44 19.85a1 1 0 0 1-1.34-1.31l2.72-6.13a1.06 1.06 0 0 0 0-.82L4.71 6.84l13 6.16a1.93 1.93 0 0 1 .79.66Z"
      style={{
        fill: "#2ca9bc",
        strokeWidth: 2,
      }}
    />
    <Path
      d="m20.09 12.9-1.59.76-13.06 6.19a1 1 0 0 1-1.34-1.31l2.72-6.13a1.06 1.06 0 0 0 0-.82L4.71 6.84 4.1 5.46a1 1 0 0 1 1.34-1.31l14.65 7a1 1 0 0 1 0 1.75ZM7 12h4"
      style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </Svg>
)

export default IconSend
