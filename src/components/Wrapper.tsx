import { Heading } from "./Heading"
import { Hero } from "./Hero"
import { MailBox } from "./Mailbox"
import { Navbar } from "./Navbar"
import { Version } from "./Version"

export const Wrapper = () =>{
    return(
        <div className="h-full w-320 z-50">
            <Navbar />
            <Version />
            <Heading />
            <MailBox />
            <Hero />
        </div>
    )
}