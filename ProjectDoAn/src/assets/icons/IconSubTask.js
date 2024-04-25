import * as React from "react"
import Svg, { SvgProps, Path, Rect } from "react-native-svg";

const IconSubTask = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={16}
      y={9}
      width={4}
      height={4}
      rx={2}
      transform="rotate(90 16 9)"
      fill="#2A4157"
      fillOpacity={0.24}
      stroke="#222"
      strokeWidth={1.2}
    />
    <Rect
      x={20}
      y={17}
      width={4}
      height={4}
      rx={2}
      transform="rotate(90 20 17)"
      fill="#2A4157"
      fillOpacity={0.24}
      stroke="#222"
      strokeWidth={1.2}
    />
    <Path
      d="M5 4v11c0 1.886 0 2.828.586 3.414C6.172 19 7.114 19 9 19h7"
      stroke="#222"
      strokeWidth={1.2}
    />
    <Path
      d="M5 7c0 1.886 0 2.828.586 3.414C6.172 11 7.114 11 9 11h3"
      stroke="#222"
      strokeWidth={1.2}
    />
  </Svg>
)

export default React.memo(IconSubTask)
