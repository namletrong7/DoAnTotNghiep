import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconLeft = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M23.505 0a1.073 1.073 0 0 1 .757 1.831L10.004 16.095l14.05 14.05c.417.417.417 1.098 0 1.515s-1.098.417-1.515 0L7.732 16.853a1.074 1.074 0 0 1 0-1.515L22.747.316c.208-.208.486-.316.757-.316z" />
  </Svg>
)

export default IconLeft
