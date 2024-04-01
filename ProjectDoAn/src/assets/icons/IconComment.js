import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconComment = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 15.207c-.46 0-.893-.234-1.2-.64l-1-1.334a.315.315 0 0 0-.133-.066h-.334c-2.78 0-4.5-.754-4.5-4.5V5.333c0-2.946 1.554-4.5 4.5-4.5h5.334c2.946 0 4.5 1.554 4.5 4.5v3.334c0 2.946-1.554 4.5-4.5 4.5h-.334c-.053 0-.1.026-.133.066l-1 1.334c-.307.406-.74.64-1.2.64ZM5.333 1.833c-2.386 0-3.5 1.114-3.5 3.5v3.334c0 3.013 1.034 3.5 3.5 3.5h.334c.34 0 .726.193.933.466l1 1.334c.233.306.567.306.8 0l1-1.334c.22-.293.567-.466.933-.466h.334c2.386 0 3.5-1.114 3.5-3.5V5.333c0-2.386-1.114-3.5-3.5-3.5H5.333Z"
      fill="#787486"
    />
    <Path
      d="M8 8a.664.664 0 0 1-.667-.667c0-.366.3-.666.667-.666.367 0 .667.3.667.666A.664.664 0 0 1 8 8ZM10.667 8A.664.664 0 0 1 10 7.333c0-.366.3-.666.667-.666.366 0 .666.3.666.666a.664.664 0 0 1-.666.667ZM5.333 8a.664.664 0 0 1-.666-.667c0-.366.3-.666.666-.666.367 0 .667.3.667.666A.664.664 0 0 1 5.333 8Z"
      fill="#787486"
    />
  </Svg>
)

export default IconComment
