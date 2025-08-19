import { useEffect, useState } from "react";
import { Button } from "./Button"

export const Navbar = () => {
    const navContent = ['Github' , 'Docs' , 'Blogs', 'About'];
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <div className={`fixed flex p-5 items-center justify-self-center transition-all duration-100 ease-in-out
            ${isScrolled ? "bg-bg/70 mt-5 backdrop-blur-md py-2 shadow-md w-250 h-15 rounded-2xl border-1 border-gray-200 z-50"
            : "w-320 h-15 bg-bg"}`}>
            <div className="w-1/3 flex items-center gap">
                {isScrolled ?
                    <a href="/" className="h-10 w-10 rounded-2xl flex items-center">
                        <img className="rounded-sm" src="/logo1.png" alt="logo" />
                    </a> :
                    <a href="/" className="h-10 w-10 rounded-2xl flex items-center">
                        <img className="rounded-sm" src="/logo1.png" alt="logo" />
                        <h1 className="font-[Poppins] font-semibold tracking-tighter text-xl">scrycli</h1>
                    </a>
                    }
            </div>
            <div className="w-1/3 flex items-center justify-evenly">
            {navContent.map((item, index) => (
                <span className="hover:bg-white cursor-pointer px-4 py-3 text-sm font-[inter] font-medium rounded-xl" key={index}>{item}</span>
            ))}
            </div>
            <div className="flex items-center justify-end gap-2 w-1/3">
            <Button variant="secondary" size="sm" text="Login"/>
            <Button variant="primary" size="sm" text="Signup"/>
            </div>
        </div>
    )
}