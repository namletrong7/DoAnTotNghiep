import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconInfor = (props) => (
  <Svg
    width={25}
    height={24}
    viewBox="-1 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    className="cf-icon-svg"
    {...props}
  >
    <Path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zM5.85 3.309a6.833 6.833 0 1 0 2.65-.534 6.787 6.787 0 0 0-2.65.534zm2.654 1.336A1.136 1.136 0 1 1 7.37 5.78a1.136 1.136 0 0 1 1.135-1.136zm.792 9.223V8.665a.792.792 0 1 0-1.583 0v5.203a.792.792 0 0 0 1.583 0z" />
  </Svg>
)

export default React.memo(IconInfor)
