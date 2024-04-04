import * as React from "react"
import Svg, {SvgProps, Path, Rect, Stop, LinearGradient, Defs} from "react-native-svg"

const IconFile = (props) => (
    <Svg
        width={40}
        height={40}
        viewBox="0 0 32 32"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Defs>
        <LinearGradient
            gradientUnits="userSpaceOnUse"
            id="a"
            x1={4}
            x2={25}
            y1={16}
            y2={16}
        >
          <Stop offset={0} stopColor="#f9dcc4" />
          <Stop offset={0.01} stopColor="#f8dbc2" />
          <Stop offset={0.12} stopColor="#f3ceb1" />
          <Stop offset={0.26} stopColor="#f0c5a6" />
          <Stop offset={0.46} stopColor="#eebf9f" />
          <Stop offset={1} stopColor="#edbe9d" />
        </LinearGradient>
        <LinearGradient
            gradientUnits="userSpaceOnUse"
            id="b"
            x1={7.48}
            x2={27.52}
            y1={8.98}
            y2={29.02}
        >
          <Stop offset={0} stopColor="#f9dcc4" />
          <Stop offset={0.32} stopColor="#f8d9c0" />
          <Stop offset={0.64} stopColor="#f4cfb3" />
          <Stop offset={0.98} stopColor="#eebf9f" />
          <Stop offset={1} stopColor="#edbe9d" />
        </LinearGradient>
      </Defs>
      <Rect
          height={22}
          rx={2.5}
          width={21}
          x={4}
          y={5}
          style={{
            fill: "url(#a)",
          }}
      />
      <Rect
          height={22}
          rx={2.5}
          width={21}
          x={7}
          y={8}
          style={{
            fill: "url(#b)",
          }}
      />
      <Path
          d="M20 2a5 5 0 0 0-5 5v5a2 2 0 0 0 3 1.73v1.77a3.5 3.5 0 0 0 7 0V7a5 5 0 0 0-5-5Z"
          style={{
            fill: "#f8edeb",
          }}
      />
      <Path
          d="M20 2a5 5 0 0 0-5 5v4.5a.5.5 0 0 0 1 0V7a4 4 0 0 1 8 0v8.5a2.5 2.5 0 0 1-5 0V7a1 1 0 0 1 2 0v8.5a.5.5 0 0 0 1 0V7a2 2 0 0 0-4 0v8.5a3.5 3.5 0 0 0 7 0V7a5 5 0 0 0-5-5Z"
          style={{
            fill: "#577590",
          }}
      />
    </Svg>
)

export default IconFile
