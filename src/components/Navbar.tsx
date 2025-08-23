import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MenuClose } from "../icons/MenuClose";
import { Menu } from "../icons/Menu";
import { Button } from "./Button";
import { Link} from "react-router-dom";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const Navbar = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [profile, setProfile] = useState(false);
    const navContent = ['Github' , 'Docs' , 'Blogs', 'About'];

    const signout = async () => {
        await signOut(auth);
        setProfile(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div 
            className={`sticky top-2 bg-bg/70 backdrop-blur-sm h-14 flex items-center  rounded-lg justify-self-center z-10 pr-2 transition-all duration-300 ${
                isScrolled ? "w-full md:w-250 border-1 border-slate-500/20 rounded-lg" : "w-full"
            }`}
        >
            <div className="flex items-center justify-between w-1/2 md:w-1/3">
                <Link to="/" className="h-10 flex items-center">
                    <img className="rounded-sm h-10 w-10" src="/logo1.png" alt="logo" />
                    {!isScrolled && (
                        <h1 className="font-[Poppins] font-semibold tracking-tighter text-xl ml-2">
                            scrycli
                        </h1>
                    )}
                </Link>
            </div>
            
            <div className="hidden md:flex items-center justify-evenly md:w-1/3">
                {navContent.map((item, index) => (
                    <Link key={index} to={`/${item.toLowerCase()}`} className="hover:font-semibold cursor-pointer px-4 py-2 text-sm font-[Inter] font-medium rounded-xl">
                        {item}
                    </Link>
                ))}
            </div>
            
            <div className="hidden md:flex items-center justify-end gap-2 w-1/3">
                {auth.currentUser?.emailVerified === true ? 
                <img 
                    src={`${auth.currentUser?.photoURL}`} 
                    alt="user" 
                    className="h-10 w-10 rounded-full border-1 border-black cursor-pointer" 
                    onClick={() => setProfile(!profile)}
                />
            : <Button onclick={() => navigate("/signup")} variant="primary" size="sm" text="Signup"/>}
            </div>
            {profile && (
                <div className="absolute top-14 right-0 bg-bg/70 backdrop-blur-sm rounded-lg h-auto w-auto p-3 border-1 border-slate-500/20">
                    <h1 className="text-md font-[Poppins] tracking-tighter">{`Hey🚀🔥  ${auth.currentUser?.displayName}`}</h1>
                    <div className="flex items-center justify-end gap-2 mt-2">
                        <Button onclick={signout} variant="primary" size="sm" text="Logout"/>
                    </div>
                </div>
            )}
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer md:hidden w-1/2 flex justify-end">
                {isMenuOpen ? <MenuClose /> : <Menu />}
            </div>
            
            {isMenuOpen && (
                <div className="absolute top-14 right-0 bg-bg/70 backdrop-blur-sm rounded-lg h-auto w-full p-3 border-1 border-slate-500/20">
                    {navContent.map((item, index) => (
                        <div key={index} className="text-xl font-[Poppins] tracking-tighter">
                            <Link to={`/${item.toLowerCase()}`} className="cursor-pointer">{item}</Link>
                        </div>
                    ))}
                    <div className="flex items-center gap-2 mt-2">
                        <Button variant="primary" size="sm" text="Signup" onclick={() => navigate("/signup")} />
                    </div>
                </div>
            )}
        </div>
    )
}