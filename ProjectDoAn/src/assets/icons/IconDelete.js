import * as React from "react"
import Svg, {SvgProps, Path, Defs} from "react-native-svg"

const IconDelete = (props) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z" />
    </Svg>
)

export default IconDelete
