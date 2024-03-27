import * as React from "react"
import Svg, {SvgProps, Path, Defs, Rect, Circle, G} from "react-native-svg"

const IconEmail = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        >
            <Path d="m4 8.2 8 5.9 8-5.9" />
            <Rect height={14} rx={2} ry={2} width={18} x={3} y={6.5} />
        </G>
    </Svg>
)

export default IconEmail
