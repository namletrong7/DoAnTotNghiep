import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconHome(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.925 28.036v-15.5l-3.23 2.584L15.613 4.786 28.53 15.12l-3.23-2.584v15.5H5.926z"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.383 19.64v8.396h6.458v-8.395h-6.458z"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M5.925 28.036H25.3"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default IconHome
