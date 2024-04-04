import * as React from "react"
import Svg, {SvgProps, Path, Defs, LinearGradient, Stop} from "react-native-svg"


const IconXls = (props) => (
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
                <Stop offset={0} stopColor="#00916e" />
                <Stop offset={1} stopColor="#007758" />
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
            d="M12.66 11a.49.49 0 0 0-.63.31l-1 3.08-1-3.08a.5.5 0 1 0-.94.32L10.47 16 9 20.34a.49.49 0 0 0 .31.63.45.45 0 0 0 .16 0 .49.49 0 0 0 .47-.34l1-3.08 1 3.08a.49.49 0 0 0 .47.34.45.45 0 0 0 .16 0 .49.49 0 0 0 .31-.63L11.53 16 13 11.66a.49.49 0 0 0-.34-.66ZM17.5 20H15v-8.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1ZM21.5 15.5h-1a.5.5 0 0 1-.5-.5v-2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 0-1h-2a1.5 1.5 0 0 0-1.5 1.5V15a1.5 1.5 0 0 0 1.5 1.5h1a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5Z"
        />
    </Svg>
)

export default IconXls
