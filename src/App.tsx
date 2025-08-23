import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { BgAnimation } from "./components/BgAnimation"
import { Wrapper } from "./components/Wrapper"
import { Signup } from "./components/Signup"
import { Token } from "./components/Token"
import { auth } from "./firebase/config"


function App() {

  return (
    <div className="flex items-center justify-center w-full h-auto bg-bg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/signup" element={<Signup />} />
          {auth.currentUser?.emailVerified ? <Route path="/token" element={<Token />} /> : <Route path="/token" element={<Signup />} />}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
