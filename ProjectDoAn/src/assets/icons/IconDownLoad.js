import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconDownLoad = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12ZM2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Zm14.293-.707L13 14.586V6h-2v8.586l-3.293-3.293-1.414 1.414 5 5 .707.707.707-.707 5-5-1.414-1.414Z"
      fill="black"
    />
  </Svg>
)

export default IconDownLoad
