import * as React from "react"
import Svg, {SvgProps, Path, G, Defs, ClipPath} from "react-native-svg"

const IconTodo = (props) => (
    <Svg
        width={22}
        height={22}
        viewBox="0 0 192 192"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
    >
      <G clipPath="url(#a)">
        <Path
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={12}
            d="M96 22a22.527 22.527 0 0 0-20.335 12.87c-11.068 23.616-33.396 70.46-44.464 93.949a28.578 28.578 0 0 0-2.767 12.225c0 15.994 12.963 28.957 28.957 28.957 23.744 0 61.129-39.83 61.129-67.564 0-12.438-10.082-22.521-22.52-22.521-12.439 0-22.52 10.083-22.52 22.521 0 27.734 37.384 67.564 61.128 67.564 15.992 0 28.957-12.963 28.957-28.957a28.56 28.56 0 0 0-2.768-12.225c-11.066-23.488-33.332-70.333-44.398-93.82A22.525 22.525 0 0 0 95.999 22Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="white" d="M0 0h192v192H0z" />
        </ClipPath>
      </Defs>
    </Svg>
)

export default IconTodo
