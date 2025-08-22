import { useEffect, useState } from "react";
import { motion } from "motion/react";

export const Hero = () => {
        const [isScrolled, setIsScrolled] = useState(false);
    
        useEffect(() => {
            const handleScroll = () => {
            setIsScrolled(window.scrollY > 160);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

    return (
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.3,
            delay: 0.1,
            ease: "easeInOut",
        }}
        className="w-full flex items-center justify-center mt-5 md:mt-10 overflow-hidden ">
            <motion.div
            animate={{
                width: isScrolled ? "1000px" : "880px",
                y: isScrolled ? -2 : 0
            }}
            transition={{
                duration: 0.4,
                ease: "easeInOut",
                type: "spring",
                stiffness: 300,
                damping: 30
            }}
             className={`p-3 bg-[#681d1d0b] mt-5 backdrop-blur-lg border-1 border-slate-500/20 rounded-xl ${
                isScrolled ? "w-250" :
                "w-220"
            } `}>
                <video className="rounded-lg" src="/cursorful-video-1754691702755.mp4" autoPlay></video>
            </motion.div>
        </motion.div>
    )
}