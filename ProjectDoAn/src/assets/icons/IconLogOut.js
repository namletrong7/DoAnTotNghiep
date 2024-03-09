import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconLogOut(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

    >
      <Path
        opacity={0.6}
        d="M15 2h-1c-2.828 0-4.243 0-5.121.879C8 3.757 8 5.172 8 8v8c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2Z"
        fill="#1C274C"
      />
      <Path
        opacity={0.4}
        d="M8 8c0-1.538 0-2.657.141-3.5H8c-2.357 0-3.536 0-4.268.732C3 5.964 3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268.732.732 1.911.732 4.268.732h.141C8 18.657 8 17.538 8 16V8Z"
        fill="#1C274C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.47 11.47a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72H14a.75.75 0 0 0 0-1.5H6.81l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2Z"
        fill="#1C274C"
      />
    </Svg>
  )
}

export default React.memo(IconLogOut)
