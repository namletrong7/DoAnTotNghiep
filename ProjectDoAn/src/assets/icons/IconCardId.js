import * as React from "react"
import Svg, {SvgProps, Path, Defs, Rect, Circle} from "react-native-svg"

const IconCardId = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 32 32"
        data-name="Layer 1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Defs></Defs>
      <Path
          className="cls-1"
          d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 18H4V8h24Z"
      />
      <Path
          className="cls-1"
          d="M18 14h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2ZM18 18h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2ZM7 21a1 1 0 0 0 1-1c0-.28.88-.89 1.28-1h.11a2.3 2.3 0 0 0 1.1-.58 2.2 2.2 0 0 0 1 0 2.3 2.3 0 0 0 1.1.58h.07c.43.16 1.28.77 1.32 1.05a1 1 0 0 0 2 0c0-1.77-2.37-2.86-2.72-3A5 5 0 0 0 14 14a3.16 3.16 0 0 0-3-3 3.16 3.16 0 0 0-3 3 5 5 0 0 0 .74 3C8.37 17.14 6 18.23 6 20a1 1 0 0 0 1 1Zm4-8a1.17 1.17 0 0 1 1 1 2.69 2.69 0 0 1-.71 2.29.41.41 0 0 1-.58 0A2.68 2.68 0 0 1 10 14a1.17 1.17 0 0 1 1-1Z"
      />
    </Svg>
)

export default IconCardId
