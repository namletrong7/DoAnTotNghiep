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
              d="M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM21 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              fill="#1C274C"
          />
      </Svg>
  )
}

export default IconMenu
