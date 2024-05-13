import * as React from "react"

const IconSwitchOn = (props) => (
    <svg
        height={40}
        width={40}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 496"
        xmlSpace="preserve"
        {...props}
    >
        <path
            style={{
                fill: "#1bceb8",
            }}
            d="M496 252.8c0 88-71.2 155.2-158.4 155.2H158.4C71.2 408 0 340.8 0 252.8v-9.6C0 155.2 71.2 88 158.4 88h178.4c88 0 158.4 67.2 158.4 155.2v9.6h.8z"
        />
        <path
            style={{
                fill: "#0dbfba",
            }}
            d="M0 256v-12.8C0 155.2 71.2 88 158.4 88h178.4c88 0 158.4 67.2 158.4 155.2V256"
        />
        <path
            style={{
                fill: "#0dbfba",
            }}
            d="M368 252.8v-9.6c0-88-71.2-155.2-158.4-155.2h-50.4C71.2 88 0 155.2 0 243.2v9.6C0 340.8 71.2 408 158.4 408h50.4c88 0 159.2-67.2 159.2-155.2z"
        />
        <circle
            style={{
                fill: "#fff",
            }}
            cx={162.4}
            cy={248}
            r={142.4}
        />
        <path
            style={{
                fill: "#e9f4f2",
            }}
            d="M62.4 147.2C117.6 92 208 92 263.2 147.2s55.2 145.6 0 200.8"
        />
    </svg>
)

export default React.memo(IconSwitchOn)
