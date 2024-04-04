import * as React from "react"
import Svg, {SvgProps, Path, LinearGradient, Stop, Defs} from "react-native-svg"

const IconPdf = (props) => (
    <Svg
        width={40}
        height={40}
        viewBox="0 0 32 32"
        data-name="Layer 1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
      <Defs>
        <LinearGradient
            gradientUnits="userSpaceOnUse"
            id="linear-gradient"
            x1={6.65}
            x2={27.27}
            y1={6.65}
            y2={27.27}
        >
          <Stop offset={0} stopColor="#ef6461" />
          <Stop offset={1} stopColor="#e83d3d" />
        </LinearGradient>
        <LinearGradient
            id="linear-gradient-2"
            x1={6}
            x2={12}
            xlinkHref="#linear-gradient"
            y1={5}
            y2={5}
        />
      </Defs>
      <Path
          d="M23.5 2h-12a.47.47 0 0 0-.35.15l-5 5A.47.47 0 0 0 6 7.5v20A2.5 2.5 0 0 0 8.5 30h15a2.5 2.5 0 0 0 2.5-2.5v-23A2.5 2.5 0 0 0 23.5 2Z"
          style={{
            fill: "url(#linear-gradient)",
          }}
      />
      <Path
          d="M11.69 2a.47.47 0 0 0-.54.11l-5 5a.47.47 0 0 0-.15.58.5.5 0 0 0 .5.31h3A2.5 2.5 0 0 0 12 5.5v-3a.5.5 0 0 0-.31-.5Z"
          style={{
            fill: "url(#linear-gradient-2)",
          }}
      />
      <Path
          style={{
            fill: "white",
          }}
          className="cls-3"
          d="M15.5 11h-1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-2.5-2.5Zm1.5 7.5a1.5 1.5 0 0 1-1.5 1.5H15v-8h.5a1.5 1.5 0 0 1 1.5 1.5ZM11.5 11h-2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0V17h1.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5Zm.5 4.5a.5.5 0 0 1-.5.5H10v-4h1.5a.5.5 0 0 1 .5.5ZM22.5 15H20v-3h2.5a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0V16h2.5a.5.5 0 0 0 0-1Z"
      />
    </Svg>
)

export default IconPdf
