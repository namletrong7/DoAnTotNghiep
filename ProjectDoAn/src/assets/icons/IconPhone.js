import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconPhone = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M8.2 15.799C1.303 8.9 2.283 5.741 3.01 4.723c.094-.164 2.396-3.611 4.865-1.589C14 8.18 6.5 8 11.389 12.611c4.89 4.612 4.432-2.611 9.477 3.514 2.022 2.469-1.425 4.771-1.588 4.864-1.018.728-4.178 1.709-11.078-5.19Z"
      stroke="#0099FF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default IconPhone
