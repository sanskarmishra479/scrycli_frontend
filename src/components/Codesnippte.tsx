import { useRef, useState } from "react"
import { Copy } from "../icons/Copy"
import { motion } from "motion/react"
import { Check } from "../icons/Check"

export const CodeSnippte = () => {
    const [copied, setCopied] = useState(false)
    const codeRef = useRef<HTMLDivElement>(null)

    const copyToClipboard = async () => {
        try {
            const text = codeRef.current?.textContent
            await navigator.clipboard.writeText(`${text}`)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }
    return(
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden h-20 w-full md:flex items-center justify-center">
            <div className="bg-white min-h-10 min-w-70 flex items-center justify-between pl-4 pr-2 rounded-lg gap-2 border-1 border-slate-200">
                <h1 ref={codeRef} className="font-[Poppins] text-sm text-slate-600">npm install -g scrycli</h1>
                <motion.div 
                    className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-lg cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={copyToClipboard}
                >
                    {copied ? <Check /> : <Copy />}
                </motion.div>
            </div>
        </motion.div>
    )
}