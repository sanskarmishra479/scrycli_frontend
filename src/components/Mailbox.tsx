import { Button } from "./Button"

export const MailBox = () => {
    return(
        <div className="h-20 w-full flex items-center justify-center">
            <div className="bg-white h-11 w-100 flex items-center justify-end-safe p-2 rounded-lg gap-2 border-1 border-slate-200">
                <input className="p-2 rounded-xl mr-14 placeholder:font-[Inter] focus:outline-none" type="email" placeholder="Enter your email here."/>
                <Button variant="primary" size="sm" text="Get started" />
            </div>
        </div>
    )
}