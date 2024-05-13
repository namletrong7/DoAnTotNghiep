import * as React from "react"

const IconSwitchOff = (props) => (
    <svg
        width={50}
        height={50}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3 12a4 4 0 0 0 3.995 4h10.01a4 4 0 0 0 0-8H6.995A4 4 0 0 0 3 12Zm-2 0a6 6 0 0 1 5.995-6h10.01a6 6 0 0 1 0 12H6.995A6 6 0 0 1 1 12Zm16 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
            fillRule="nonzero"
            fill="#4A4A4A"
        />
    </svg>
)

export default React.memo(IconSwitchOff)
