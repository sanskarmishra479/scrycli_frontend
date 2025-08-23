import { Copy } from "../icons/Copy"
import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { Check } from "../icons/Check"
import { auth } from '../firebase/config' 
import { onAuthStateChanged, type User } from 'firebase/auth'
import { Signup } from "./Signup"

export const Token = () => {
    const [token, setToken] = useState('Loading...')
    const [copied, setCopied] = useState(false)

    const getToken = async (currentUser: User | null) => {
        try {
            const displayName = currentUser?.displayName || currentUser?.email || 'anonymous'
            console.log('Using user:', displayName)
            
            const response = await fetch('/api/generate-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    userId: displayName
                })
            })
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            
            const data = await response.json()
            return data.token
        } catch (error) {
            console.error('Failed to fetch token:', error)
            return 'fallback-token'
        }
    }

    useEffect(() => {
        let mounted = true
        
        // Listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (mounted) {
                
                // Generate token once we have user info
                getToken(currentUser).then(fetchedToken => {
                    if (mounted) {
                        console.log('Fetched JWT:', fetchedToken)
                        setToken(fetchedToken)
                    }
                })
            }
        })
        
        return () => {
            mounted = false
            unsubscribe() // Clean up listener
        }
    }, [])
    
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(token)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <>
        {auth.currentUser?.emailVerified ?         
        <div className="flex items-center justify-center w-screen h-screen font-[Poppins]">
            <div className="md:h-110 md:w-110 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-semibold mb-4">Token</h1>
                <div className="h-20 w-full md:flex items-center justify-center">
                    <div className="bg-white min-h-10 min-w-70 flex items-center justify-between pl-4 pr-2 rounded-lg gap-2 border-1 border-slate-200">
                        <h1 className="font-[Poppins] text-sm text-slate-600 truncate w-[85%]">{token}</h1>
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`h-8 w-8 flex items-center justify-center rounded-lg cursor-pointer transition-colors bg-black text-white`}
                            onClick={copyToClipboard}
                        >
                            {copied ? <Check /> : <Copy />}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div> :
        <Signup />}
        </>
    )
}