import { Button } from "./Button"

export const Navbar = () => {
    const navContent = ['Products' , 'Docs' , 'About' , 'Blogs']
    return(
        <div className="h-17 w-full  p-5 flex items-center justify-evenly">
            <div className="w-1/3 flex items-center gap">
                <a href="/" className="h-10 w-10 rounded-2xl flex items-center">
                    <img className="rounded-sm" src="/logo3.png" alt="logo" />
                    <h1 className="font-[Poppins] font-semibold tracking-tighter text-xl">scrycli</h1>
                </a>
            </div>
            <div className="w-1/3 flex items-center justify-evenly">
            {navContent.map((item, index) => (
                <span className="hover:bg-amber-200 cursor-pointer px-3 py-2 text-sm font-[inter] font-medium rounded-xl" key={index}>{item}</span>
            ))}
            </div>
            <div className="flex items-center justify-end gap-2 w-1/3">
            <Button variant="primary" size="sm" text="Signup"/>
            <Button variant="secondary" size="sm" text="Login"/>
            </div>
        </div>
    )
}