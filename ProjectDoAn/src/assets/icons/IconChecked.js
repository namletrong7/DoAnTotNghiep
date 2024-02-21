import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconChecked(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.5 10.5v6.125c0 .464-.176.91-.488 1.237a1.627 1.627 0 01-1.179.513H4.167c-.442 0-.866-.184-1.179-.513a1.795 1.795 0 01-.488-1.237V4.375c0-.464.176-.91.488-1.237a1.627 1.627 0 011.179-.513h9.166m-5.833 7L10 12.25l8.333-8.75"
        stroke="#007AFE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default IconChecked;
