import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconUserAdmin = (props) => (
    <Svg
        height={23}
        width={23}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        {...props}
    >
        <Path d="m22.3 16.7 1.4-1.4-3.7-3.7-5.8 5.8c-.5-.3-1.1-.4-1.7-.4-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-.6-.2-1.2-.4-1.7l1.9-1.9 2.3 2.3 1.4-1.4-2.3-2.3 1.1-1.1 2.3 2.3zM12.5 22c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
        <Path d="M2 19c0-3.9 3.1-7 7-7 2 0 3.9.9 5.3 2.4l1.5-1.3c-.9-1-1.9-1.8-3.1-2.3C14.1 9.7 15 7.9 15 6c0-3.3-2.7-6-6-6S3 2.7 3 6c0 1.9.9 3.7 2.4 4.8C2.2 12.2 0 15.3 0 19v5h8v-2H2v-3zM5 6c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
    </Svg>
)

export default React.memo(IconUserAdmin)
