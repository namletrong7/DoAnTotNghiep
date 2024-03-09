import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconBack = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"

  >
    <Path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" />
    <Path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" />
  </Svg>
)

export default IconBack
