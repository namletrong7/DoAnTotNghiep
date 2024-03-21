import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconAttach = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m21.654 11.444-8.702 8.702c-2.472 2.472-6.626 2.472-9.098 0-2.472-2.472-2.472-6.626 0-9.098l7.713-7.713c1.78-1.78 4.55-1.78 6.33 0 1.78 1.78 1.78 4.549 0 6.329l-7.12 7.02c-.99.99-2.572.99-3.462 0-.989-.988-.989-2.57 0-3.46l5.933-5.933"
      stroke="#7B7B85"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="square"
    />
  </Svg>
)

export default IconAttach
