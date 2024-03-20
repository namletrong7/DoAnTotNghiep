import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconMuiTenXuong = (props) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        data-name="Flat Line"
        xmlns="http://www.w3.org/2000/svg"
        className="icon flat-line"
        {...props}
    >
      <Path
          style={{
            fill: "none",
            stroke: "#000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
          d="M12 3v18"
      />
      <Path
          data-name="primary"
          style={{
            fill: "none",
            stroke: "#000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
          d="m9 18 3 3 3-3"
      />
    </Svg>
)

export default IconMuiTenXuong
