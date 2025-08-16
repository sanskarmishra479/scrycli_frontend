import { CodeSnippte } from "./Codesnippte"
import { Footer } from "./Footer"
import { Heading } from "./Heading"
import { Hero } from "./Hero"
import { Navbar } from "./Navbar"
import { Version } from "./Version"

export const Wrapper = () =>{
    return(
        <div className="h-full w-250 z-50">
            <Navbar />
            <Version />
            <Heading />
            <CodeSnippte />
            <Hero />
            <Footer />
        </div>
    )
}