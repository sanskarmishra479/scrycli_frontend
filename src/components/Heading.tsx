import { motion } from "motion/react"

export const Heading = () =>{
    return(
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.5,
            ease: "easeInOut",
        }}
         className="h-auto w-full flex flex-col items-center justify-center mt-10">
            <div className="w-full md:w-140">
                <h1 className="text-center text-6xl/15 font-[Poppins] tracking-tighter">
                    Your code is trash. I’m here to clean it.
                </h1>
            </div>
            <div className="w-[60%] md:w-95 text-center mt-4 text-[14px] md:text-[15px] md:text-[#6c6c6b] font-[Poppins] tracking-tight">
                <p className="text-[#6c6c6b] font-[Poppins]">
                    Bugs? Spaghetti code? Lazy mistakes?
                    I see it all. I’m SCRYCLI, 
                    and I’m here to mop up your mess.
                </p>
            </div>
        </motion.div>
    )
}