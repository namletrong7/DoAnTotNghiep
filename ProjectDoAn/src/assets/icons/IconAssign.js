import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconAssign = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.4}
      d="M2.804 15.477s.142 1.738.175 2.286c.044.735.328 1.556.802 2.126.67.808 1.457 1.093 2.51 1.095 1.236.002 10.231.002 11.468 0 1.052-.002 1.84-.287 2.51-1.095.473-.57.757-1.39.802-2.126.032-.548.174-2.286.174-2.286"
      stroke="#130F26"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.496 5.33v-.372c0-1.22.988-2.208 2.208-2.208h2.582c1.219 0 2.208.988 2.208 2.208l.001.371M11.995 16.678v-1.294"
      stroke="#130F26"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M2.75 8.389v3.467c1.918 1.265 4.216 2.151 6.738 2.502a2.584 2.584 0 0 1 2.502-1.908c1.188 0 2.2.807 2.483 1.918 2.532-.35 4.839-1.237 6.767-2.512V8.39a3.05 3.05 0 0 0-3.057-3.058H5.817A3.06 3.06 0 0 0 2.75 8.39Z"
      stroke="#130F26"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default IconAssign
