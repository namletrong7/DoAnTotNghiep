import * as React from "react"
import Svg, {Circle, Path} from "react-native-svg"

function IconMenu(props) {
  return (
      <Svg
          width={25}
          height={25}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
      >
        <Path
            d="M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="black"
        />
        <Circle
            opacity={1}
            cx={12}
            cy={12}
            r={10}
            stroke="black"
            strokeWidth={1.5}
        />
      </Svg>
  )
}

export default IconMenu
