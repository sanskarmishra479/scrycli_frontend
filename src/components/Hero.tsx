import { useEffect, useState } from "react";

export const Hero = () => {
        const [isScrolled, setIsScrolled] = useState(false);
    
        useEffect(() => {
            const handleScroll = () => {
            setIsScrolled(window.scrollY > 180);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

    return (
        <div className="w-full flex items-center justify-center mt-10">
            <div className={`p-3 bg-[#681d1d0b] mt-5 backdrop-blur-lg transition-all duration-300  border-1 border-slate-500/20 rounded-xl ${
                isScrolled ? "w-250" :
                "w-220"
            } `}>
                <video className="rounded-lg" src="/cursorful-video-1754691702755.mp4" autoPlay></video>
            </div>
        </div>
    )
}