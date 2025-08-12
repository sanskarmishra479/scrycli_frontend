import { useState } from "react"

export const Hero = () => {
    const [section , setSection] = useState('Installetion');

    return(
        <div className="h-170 w-320 bg-amber-200">
            <div className="h-10 w-full flex items-center justify-evenly cursor-pointer">
                <h1 className="hover:bg-amber-50 h-full w-full flex items-center justify-evenly" onClick={()=>{setSection("Installetion")}}>Installetion</h1>
                <h1 className="hover:bg-amber-50 h-full w-full flex items-center justify-evenly" onClick={()=>{setSection("Select Models")}}>Select Models</h1>
                <h1 className="hover:bg-amber-50 h-full w-full flex items-center justify-evenly" onClick={()=>{setSection("Setup API")}}>Setup API</h1>
                <h1 className="hover:bg-amber-50 h-full w-full flex items-center justify-evenly" onClick={()=>{setSection("Ready to Use")}}>Ready to Use</h1>
            </div>
            {section === "Installetion" &&
            <div >
                <div className="h-16 w-full bg-red-400 flex items-center justify-center gap-2">
                        <h1 className="font-bold">{section}:</h1>
                        <p>npm install scrycli</p>
                </div>
               <h1>video1</h1>
            </div>
            }
            {section === "Select Models" &&
            <div>
                <div className="h-16 w-full bg-red-400 flex items-center justify-center">
                    <h1 className="font-bold">{section}</h1>
                </div>
                <h1>video2</h1>
            </div>
            }
            {section === "Setup API" &&
            <div>
                <div className="h-16 w-full bg-red-400 flex items-center justify-center">
                    <h1 className="font-bold">{section}</h1>
                </div>
                <h1>video3</h1>
            </div>
            }
            {section === "Ready to Use" &&
            <div>
                <div className="h-16 w-full bg-red-400 flex items-center justify-center">
                    <h1 className="font-bold">{section}</h1>
                </div>
                <h1>video4</h1>
            </div>
            }
        </div>
    )
}