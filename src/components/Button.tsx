import type { ButtonTypes } from "../types/ButtonTypes"

export const Button = (props:ButtonTypes) => {

    const variantStyle = {
        "primary": "bg-black text-[#f6f5f3] font-[Inter] font-semibold rounded-xl cursor-pointer border-1 border-black",
        "secondary":"text-black font-[Inter] font-semibold rounded-xl cursor-pointer border-1 border-gray-400 hover:border-black",
    }

    const sizeStyle = {
        "sm": "px-3 py-2 text-sm",
        "md": "px-6 py-3 text-md",
        "lg": "px-9 py-4 text-lg",
        "xl": "px-11 py-6 text-xl "
    }

    return(
        <button className={`${variantStyle[props.variant]}  ${sizeStyle[props.size]}`} onClick={props.onclick}>
            {props.Icon}
            {props.text}
        </button>
    )
}