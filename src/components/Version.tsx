import { RightArrow } from "../icons/RightArrow"

export const Version = () =>{
    return(
        <a href="#lauchPage" target="_blank" className="h-20 w-full mt-20 flex items-center justify-center cursor-pointer">
            <div className="h-8 w-80 rounded-lg shadow-lg mt-20 flex items-center pl-1 gap-2 font-[Inter]">
                <div className="flex items-center justify-center h-6 w-13 text-[10px] text-white bg-black rounded-md ">
                    <h1>NEW</h1>
                </div>
                <h1 className="text-[13px] text-slate-800">Currently scrycli V0 is launched 🎊</h1>
                <RightArrow/>
            </div>
        </a>
    )
}