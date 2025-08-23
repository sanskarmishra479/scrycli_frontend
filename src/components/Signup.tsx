import { motion } from "motion/react";
import { Google } from "../icons/Google";
import { signInWithPopup } from "firebase/auth";
import { auth, GoogleProvider } from "../firebase/config";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await signInWithPopup(auth, GoogleProvider);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
         className="flex items-center justify-center w-screen h-screen font-[Poppins]">
            <div className="md:h-110 md:w-110 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center gap-4">
                    <img src="/logo1.png" alt="scrycli logo" className="h-28 w-28 rounded mb-2" />
                    <h1 className="text-2xl font-semibold mb-4">Welcome to Scrycli</h1>
                <motion.div 
                    className="h-12 md:w-100 w-full rounded-xl bg-black text-white flex items-center justify-center gap-2 cursor-pointer"
                    whileHover={{
                        scale: 1.05,
                        transition: {
                            duration: 0.2,
                        }
                    }}
                    whileTap={{
                        scale: 0.98,
                        transition: {
                            duration: 0.1,
                        }
                    }}
                    onClick={() => {
                        signup();
                    }}
                    >
                    
                    <Google />
                    <h1>Continue with Google</h1>
                </motion.div>
            </div>
        </motion.div>
    )
}