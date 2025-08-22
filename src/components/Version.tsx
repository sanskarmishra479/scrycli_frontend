import { Link } from "react-router-dom"
import { RightArrow } from "../icons/RightArrow"
import { motion } from "motion/react"


export const Version = () =>{
    return(
            <div className="h-20 w-full flex items-center justify-center mt-5 md:mt-10">
                <Link to="https://www.producthunt.com/" target="_blank">
                    <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.2,
                                    delay: 0.1,
                                    ease: "easeInOut",
                                }} 
                    whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="h-6 w-52 md:h-8 md:w-80  rounded-lg shadow-lg flex items-center pl-1 gap-2 font-[Inter]">
                        <div className="flex items-center justify-center h-4 w-8 md:h-6 md:w-13 text-[8px] md:text-[10px]  text-white bg-black rounded-md ">
                            <h1>NEW</h1>
                        </div>
                        <h1 className="text-[8px] md:text-[13px] text-slate-800">Currently scrycli V0 is launched 🎊</h1>
                        <RightArrow/>
                    </motion.div>
                </Link>
            </div>
    )
}