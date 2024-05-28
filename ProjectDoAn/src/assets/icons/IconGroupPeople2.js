import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconGroupPeople2 = (props) => (
    <Svg
        height={20}
        width={26}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        {...props}
    >
        <Path d="M24 15.9c0-2.8-1.5-5-3.7-6.1 1-1 1.7-2.3 1.7-3.8 0-2.8-2.2-5-5-5-2.1 0-3.8 1.2-4.6 3h-.8C10.8 2.2 9.1 1 7 1 4.2 1 2 3.2 2 6c0 1.5.7 2.8 1.7 3.8C1.5 10.9 0 13.2 0 15.9V20h5v3h14v-3h5v-4.1zM17 3c1.7 0 3 1.3 3 3 0 1.6-1.3 3-3 3 0-1.9-1.1-3.5-2.7-4.4.5-1 1.5-1.6 2.7-1.6zm-3.6 1.2zM15 9c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3zm-4.4-4.8zM7 3c1.2 0 2.2.6 2.7 1.6C8.1 5.5 7 7.1 7 9 5.3 9 4 7.7 4 6s1.3-3 3-3zM5.1 18H2v-2.1C2 13.1 4.1 11 7 11h.3c.3.7.8 1.3 1.3 1.8-1.9 1-3.2 2.9-3.5 5.2zM17 21H7v-2.1c0-2.8 2.2-4.9 5-4.9 2.9 0 5 2.1 5 4.9V21zm5-3h-3.1c-.3-2.3-1.7-4.2-3.7-5.2.6-.5 1-1.1 1.3-1.8h.4c2.9 0 5 2.1 5 4.9V18z" />
    </Svg>
)

export default React.memo(IconGroupPeople2)
