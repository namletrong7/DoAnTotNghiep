import * as React from "react"
import Svg, { SvgProps, Defs, Path, G, Mask, Use } from "react-native-svg"

const IconUpLoad = () => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"

  >
    <Defs>
      <Path
        id="a"
        d="M6.293.293a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2ZM0 11h16v2H0v-2Z"
      />
      <Path
        id="c"
        d="M11 3.414v8.587a1 1 0 0 1-2 0V3.414L6.707 5.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 1 1-1.414 1.414L11 3.414ZM18 16v-6a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-7a1 1 0 1 1 2 0v6h16Z"
      />
    </Defs>
    <G fill="none" fillRule="evenodd" transform="translate(2 3)">
      <G transform="translate(2 3)">
        <Mask id="b" fill="#fff">
          <Use xlinkHref="#a" />
        </Mask>
        <Use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#a" />
        <G fill="#FFA0A0" mask="url(#b)">
          <Path d="M-4-6h24v24H-4z" />
        </G>
      </G>
      <Mask id="d" fill="#fff">
        <Use xlinkHref="#c" />
      </Mask>
      <Use fill="#000" fillRule="nonzero" xlinkHref="#c" />
      <G fill="#7600FF" mask="url(#d)">
        <Path d="M-2-3h24v24H-2z" />
      </G>
    </G>
  </Svg>
)

export default IconUpLoad
