import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconSub = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="-1.7 0 20.4 20.4"
    xmlns="http://www.w3.org/2000/svg"
    className="cf-icon-svg"
    {...props}
  >
    <Path d="M16.416 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.916 7.917zm-2.958.01a.792.792 0 0 0-.792-.792H4.32a.792.792 0 0 0 0 1.583h8.346a.792.792 0 0 0 .792-.791z" />
  </Svg>
)

export default React.memo(IconSub)
