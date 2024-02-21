import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function IconEyeSlash(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fill="#ccc"
        d="M12.9 5.2l-.8.8c1.7.9 2.5 2.3 2.8 3-.7.9-2.8 3.1-7 3.1-.7 0-1.2-.1-1.8-.2l-.8.8c.8.3 1.7.4 2.6.4 5.7 0 8.1-4 8.1-4s-.6-2.4-3.1-3.9z"
      />
      <Path
        fill="#ccc"
        d="M12 7.1c0-.3 0-.6-.1-.8L7.1 11c.3 0 .6.1.9.1 2.2 0 4-1.8 4-4zM15.3 0l-4.4 4.4C10.1 4.2 9.1 4 8 4 1.3 4 0 9.1 0 9.1s1 1.8 3.3 3L0 15.3v.7h.7L16 .7V0h-.7zM4 11.3C2.4 10.6 1.5 9.5 1.1 9c.3-.7 1.1-2.2 3.1-3.2-.1.4-.2.8-.2 1.3 0 1.1.5 2.2 1.3 2.9L4 11.3zm2.2-3.4l-1 .2s-.3-.5-.3-1.2c0-.8.4-1.5.4-1.5.5-.3 1.3-.3 1.3-.3s-.5.9-.5 1.7c-.1.7.1 1.1.1 1.1z"
      />
    </Svg>
  )
}

export default IconEyeSlash
