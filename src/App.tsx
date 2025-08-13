import { BgAnimation } from "./components/BgAnimation"
import { Wrapper } from "./components/Wrapper"

function App() {

  return (
    <div className="flex justify-center bg-bg">
      <div className="absolute">
        <BgAnimation />
      </div>
      <Wrapper />
    </div>
  )
}

export default App
