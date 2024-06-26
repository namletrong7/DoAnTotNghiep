import * as React from "react"
import Svg, {SvgProps, G, Path, Circle} from "react-native-svg"

const IconCam = (props) => (
    <Svg
        width={29}
        height={29}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Circle cx={12} cy={13} r={3} stroke="#0066FF" strokeWidth={1.5} />
      <Path
          opacity={0.5}
          d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697 0-3.065 0-4.597-.749-5.697a4.407 4.407 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636-.129.635-.696 1.125-1.355 1.125-1.38.06-2.282.23-3.003.702A4.405 4.405 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z"
          stroke="#0066FF"
          strokeWidth={1.5}
      />
      <Path
          d="M19 10h-1"
          stroke="#0066FF"
          strokeWidth={1.5}
          strokeLinecap="round"
      />
    </Svg>
)

export default React.memo(IconCam)
