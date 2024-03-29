import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconChat(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.75A9.25 9.25 0 002.75 12c0 1.481.348 2.879.965 4.118.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 00.673.674l2.227-.596a2.383 2.383 0 011.676.187A9.208 9.208 0 0012 21.25a9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75c-1.718 0-3.344-.404-4.787-1.122a.885.885 0 00-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.885.885 0 00-.08-.62A10.709 10.709 0 011.25 12zm6-1.5A.75.75 0 018 9.75h8a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75z"
        fill="#ffffff"
      />
    </Svg>
  )
}

export default IconChat
