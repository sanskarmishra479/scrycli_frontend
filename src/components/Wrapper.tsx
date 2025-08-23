import { CodeSnippte } from "./Codesnippte"
import { Footer } from "./Footer"
import { Heading } from "./Heading"
import { Hero } from "./Hero"
import { Navbar } from "./Navbar"
import { Version } from "./Version"


export const Wrapper = () =>{
    
    return(
        <div className="relative bg-bg h-full w-[90%] md:w-320">
            <Navbar />
            <Version />
            <Heading />
            <CodeSnippte />
            <Hero />
            <Footer />
        </div>
    )
}