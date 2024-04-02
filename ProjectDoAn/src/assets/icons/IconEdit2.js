import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconEdit2 = (props) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m8.56 20.25 12-12-4.81-4.81-12 12v4.81h4.81Zm7.19-14.69 2.69 2.69-1.94 1.94-2.69-2.69 1.94-1.94Zm-3 3 2.69 2.69-7.5 7.5H5.25v-2.69l7.5-7.5Z"
            fill="#080341"
        />
    </Svg>
)

export default React.memo(IconEdit2)
