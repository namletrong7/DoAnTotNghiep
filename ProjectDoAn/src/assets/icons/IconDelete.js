import * as React from "react"
import Svg, {SvgProps, Path, Defs} from "react-native-svg"

const IconDelete = (props) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M4 7h16M6 10l1.701 9.358A2 2 0 0 0 9.67 21h4.662a2 2 0 0 0 1.968-1.642L18 10M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V5Z"
            stroke="#000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default IconDelete
