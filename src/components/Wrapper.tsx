import { About } from "./About"
import { Footer } from "./Footer"
import { Heading } from "./Heading"
import { Hero } from "./Hero"
import { MailBox } from "./Mailbox"
import { Navbar } from "./Navbar"
import { Version } from "./Version"

export const Wrapper = () =>{
    return(
        <div className="h-full w-250 z-50">
            <Navbar />
            <Version />
            <Heading />
            <MailBox />
            <Hero />
            {/* <About /> */}
            <Footer />
        </div>
    )
}