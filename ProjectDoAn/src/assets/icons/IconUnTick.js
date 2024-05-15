import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

const IconUnTick = (props) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={24}
      cy={24}
      r={21.5}
      style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
  </Svg>
)

export default IconUnTick
