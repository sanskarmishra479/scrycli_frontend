import { Hero } from "./Hero"
import { Navbar } from "./Navbar"

export const Wrapper = () =>{
    return(
        <div className="h-full w-320">
            <Navbar />
            <div className="mt-96">
                <Hero />
            </div>
        </div>
    )
}