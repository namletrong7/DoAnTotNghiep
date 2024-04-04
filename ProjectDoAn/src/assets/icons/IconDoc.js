import * as React from "react"
import Svg, {SvgProps, Path, Defs, LinearGradient, Stop} from "react-native-svg"

const IconDoc = (props) => (
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
                <Stop offset={0} stopColor="#009ade" />
                <Stop offset={1} stopColor="#009ade" />
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
            d="M16 21a2 2 0 0 1-2-2v-6a2 2 0 0 1 4 0v6a2 2 0 0 1-2 2Zm0-9a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1ZM9.5 21a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5 3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 9.5 21Zm.5-8.95V20a2.5 2.5 0 0 0 2-2.45v-3a2.5 2.5 0 0 0-2-2.5ZM21 21a2 2 0 0 1-2-2v-6a2 2 0 0 1 4 0 .5.5 0 0 1-1 0 1 1 0 0 0-2 0v6a1 1 0 0 0 2 0 .5.5 0 0 1 1 0 2 2 0 0 1-2 2Z"
        />
    </Svg>
)

export default IconDoc
