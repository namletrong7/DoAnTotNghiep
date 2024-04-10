import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconRight = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M8.489 31.975a1.073 1.073 0 0 1-.757-1.831L21.99 15.88 7.94 1.83c-.417-.417-.417-1.098 0-1.515s1.098-.417 1.515 0l14.807 14.807a1.074 1.074 0 0 1 0 1.515L9.247 31.659a1.078 1.078 0 0 1-.757.316z" />
  </Svg>
)

export default React.memo(IconRight)
