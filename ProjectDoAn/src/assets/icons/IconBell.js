import * as React from "react"
import Svg, { SvgProps, Path, Defs, RadialGradient, Stop } from "react-native-svg";

const IconBell = (props) => (
  <Svg
    width={14}
    height={14}
    viewBox="-2 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.647 32a4.571 4.571 0 1 0 0-9.143 4.571 4.571 0 0 0 0 9.143Z"
      fill="white"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.19 6.172c-1.325-1.324-2.823-2.227-4.496-2.71v-.414c0-.842-.297-1.56-.892-2.155A2.937 2.937 0 0 0 13.647 0c-.842 0-1.56.298-2.155.893a2.937 2.937 0 0 0-.893 2.155v.414c-1.672.483-3.17 1.386-4.495 2.71-2.083 2.083-3.124 4.597-3.124 7.542v8.229L.491 24.929c-.189.227-.307.488-.353.78-.03.294.019.574.144.842.125.268.313.481.562.64.25.158.522.238.818.238h23.97c.295 0 .568-.08.817-.238.25-.159.437-.372.562-.64.126-.268.17-.548.132-.841a1.496 1.496 0 0 0-.341-.78l-2.489-2.987v-8.229c0-2.945-1.041-5.46-3.124-7.542Z"
      fill="url(#a)"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(12.58806 17.14284 -16.88644 12.39979 9.13 7.542)"
      >
        <Stop stopColor="white" />
        <Stop offset={0.457} stopColor="white" />
        <Stop offset={1} stopColor="white" />
      </RadialGradient>
    </Defs>
  </Svg>
)

export default React.memo(IconBell)
