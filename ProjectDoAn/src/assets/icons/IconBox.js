import * as React from "react"
import Svg, {SvgProps, Path, G} from "react-native-svg"

const IconBox = (props) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          d="M14.22 9.78 12 10.89m0 0L9.78 9.78M12 10.89v2.78m2.22-10.56L12 2 9.78 3.11M5.33 18.67l-2.22-1.11v-2.78m15.56 3.89 2.22-1.11v-2.78"
          stroke="#292D32"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
      />
      <G
          opacity={0.4}
          stroke="#292D32"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <Path d="m20.89 6.91-2.22 1.11M20.89 6.91 18.67 5.8M20.89 6.91v2.78M3.11 6.91 5.33 5.8M3.11 6.91l2.22 1.11M3.11 6.91v2.78M12 22.47l-2.22-1.11M12 22.47l2.22-1.11M12 22.47v-2.78" />
      </G>
    </Svg>
)

export default React.memo(IconBox)
