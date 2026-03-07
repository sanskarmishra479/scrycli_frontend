import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
// import { BgAnimation } from "./components/BgAnimation"
import { Wrapper } from "./components/Wrapper"
import { Signup } from "./components/Signup"
import { Token } from "./components/Token"
import { Blog } from "./components/Blog"
import { About } from "./components/About"
import { Analytics } from "@vercel/analytics/react";



function App() {

  return (
    <div className="flex items-center justify-center w-full h-auto bg-bg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/token" element={<Token />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Navigate to="/docs/introduction" replace />} />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </div>
  )
}

export default App
