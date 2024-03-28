import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop, G,
} from "react-native-svg"


const IconLogoProject = (props) => (
    <Svg
        width={25}
        height={29}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <G filter="url(#a)">
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m12.5 2.72-.818.458V9.27l-.632.334-3.778 2v4.792l3.778 2 .632.334V24.822l.818.458.818-.458V18.73l.632-.335 3.779-1.999v-.84h2.373v2.27l-.632.334-3.778 1.999v3.334l6.935-3.884V8.39l-6.935-3.884v3.334L19.47 9.84l.632.334v2.27h-2.373v-.84l-3.78-2-.63-.334V3.178L12.5 2.72ZM2.373 8.391 9.31 4.507v3.334L5.53 9.84l-.632.334v7.652l.632.334 3.779 1.999v3.334l-6.936-3.884V8.39ZM25 7 12.5 0 0 7v14l12.5 7L25 21V7Z"
            fill="#2F66F6"
        />
      </G>
      <Defs></Defs>
    </Svg>
)

export default React.memo(IconLogoProject)
