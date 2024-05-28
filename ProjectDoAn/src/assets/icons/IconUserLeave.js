import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconUserLeave = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M11 21H5.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C4 20.24 4 19.96 4 19.4v-1.716c0-.636 0-.953.048-1.218a3 3 0 0 1 2.418-2.418c.077-.014.158-.024.25-.03.225-.018.337-.027.488-.015.156.011.243.027.394.07.145.04.406.159.929.395A5.979 5.979 0 0 0 11 15c.882 0 1.72-.19 2.473-.532.523-.236.784-.355.929-.396.15-.042.238-.058.394-.07H15M20 18h-6m1-11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            stroke="#000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default React.memo(IconUserLeave)
