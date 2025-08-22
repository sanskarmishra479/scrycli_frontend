import type { ButtonTypes } from "../types/ButtonTypes"
import { motion } from "motion/react";
export const Button = (props:ButtonTypes) => {

    const variantStyle = {
        "primary": "bg-black text-[#f6f5f3] font-[Inter] font-semibold rounded-xl cursor-pointer border-1 border-black opacity-100",
        "secondary":"text-black font-[Inter] font-semibold rounded-xl cursor-pointer border-1 border-gray-400 hover:border-black opacity-100",
    }

    const sizeStyle = {
        "sm": "px-4 py-2 text-sm",
        "md": "px-6 py-3 text-md",
        "lg": "px-9 py-4 text-lg",
        "xl": "px-11 py-6 text-xl "
    }

    return(
        <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={`${variantStyle[props.variant]}  ${sizeStyle[props.size]}`} onClick={props.onclick}>
            {props.Icon}
            {props.text}
        </motion.button>
    )
}