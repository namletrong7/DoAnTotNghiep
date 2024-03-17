import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconComment = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.8 9h8.4M7.8 12.6h8.4M21 10.8C21 6.492 16.97 3 12 3s-9 3.492-9 7.8 4.03 7.8 9 7.8c.63 0 1.244-.058 1.838-.164L18.6 21v-4.91c1.486-1.39 2.4-3.245 2.4-5.29Z"
      stroke="#7B7B85"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default IconComment
