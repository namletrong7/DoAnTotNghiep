import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"


const IconLogoProject = () => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M29.665 15.216 17.208 3.168 16 2l-9.377 9.07-4.288 4.146a1.083 1.083 0 0 0 0 1.568l8.567 8.286L16 30l9.377-9.07.146-.14 4.142-4.006a1.083 1.083 0 0 0 0-1.567ZM16 20.14 11.72 16 16 11.86 20.28 16 16 20.14Z"
      fill="#2684FF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 11.86a6.81 6.81 0 0 1-.03-9.827l-9.366 9.055 5.097 4.93L16 11.861Z"
      fill="url(#a)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.291 15.989 16 20.139a6.857 6.857 0 0 1 2.112 4.93c0 1.85-.76 3.623-2.112 4.93l9.389-9.08-5.098-4.93Z"
      fill="url(#b)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={15.236}
        y1={7.673}
        x2={8.096}
        y2={10.79}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.18} stopColor="#0052CC" />
        <Stop offset={1} stopColor="#2684FF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={16.818}
        y1={24.279}
        x2={23.944}
        y2={21.184}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.18} stopColor="#0052CC" />
        <Stop offset={1} stopColor="#2684FF" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default React.memo(IconLogoProject)
