import * as React from "react"
import Svg, { SvgProps, Path, Defs, RadialGradient, Stop } from "react-native-svg";

const IconReport = (props) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          d="M6 14.462h10.19c1.417 0 2.282-1.688 1.536-2.995l-.49-.858a2.808 2.808 0 0 1 0-2.756l.49-.858C18.472 5.688 17.606 4 16.191 4H6v10.462Z"
          fill="#363853"
          fillOpacity={0.15}
      />
      <Path
          d="M6 14.462h10.19c1.417 0 2.282-1.688 1.536-2.995l-.49-.858a2.808 2.808 0 0 1 0-2.756l.49-.858C18.472 5.688 17.606 4 16.191 4H6v10.462Zm0 0V20"
          stroke="#363853"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
      />
    </Svg>
)

export default React.memo(IconReport)
