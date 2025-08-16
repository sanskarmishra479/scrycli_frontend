import { Copy } from "../icons/Copy"

export const CodeSnippte = () => {
    return(
        <div className="h-20 w-full flex items-center justify-center">
            <div className="bg-white min-h-10 min-w-70 flex items-center justify-between pl-4 pr-2 rounded-lg gap-2 border-1 border-slate-200">
                <h1 className="font-[Poppins] text-sm text-slate-600">npm install -g scrycli</h1>
                <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-lg cursor-pointer">
                    <Copy />
                </div>
            </div>
        </div>
    )
}