import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

const IconLich = (props) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 120 120"
    id="Layer_1"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M27.9 100.7H92c4.1 0 7.3-3.3 7.3-7.3V31.1c0-4.1-3.3-7.3-7.3-7.3H27.9c-4.1 0-7.3 3.3-7.3 7.3v62.2c0 4.1 3.3 7.4 7.3 7.4z"
      style={{
        fill: "#C1CDCD",
      }}
    />
    <Path
      d="M99.4 30.8v15.1H20.6V30.8c0-3.9 2.8-7 6.3-7h66.2c3.5-.1 6.3 3.1 6.3 7z"
      style={{
        fill: "#5475ff",
      }}
    />
    <Circle className="st2" cx={38.9} cy={34.8} r={3.6} />
    <Circle className="st2" cx={60} cy={34.8} r={3.6} />
    <Circle className="st2" cx={81.1} cy={34.8} r={3.6} />
    <Path
      className="st3"
      d="M39.9 19.3h-2c-.6 0-1.1.5-1.1 1.1v13.9c0 .6.5 1.1 1.1 1.1h2c.6 0 1.1-.5 1.1-1.1V20.5c.1-.7-.5-1.2-1.1-1.2zM61 19.3h-2c-.6 0-1.1.5-1.1 1.1v13.9c0 .6.5 1.1 1.1 1.1h2c.6 0 1.1-.5 1.1-1.1V20.5c0-.7-.5-1.2-1.1-1.2zM82.1 19.3h-2c-.6 0-1.1.5-1.1 1.1v13.9c0 .6.5 1.1 1.1 1.1h2c.6 0 1.1-.5 1.1-1.1V20.5c0-.7-.5-1.2-1.1-1.2z"
    />
  </Svg>
)

export default React.memo(IconLich)
