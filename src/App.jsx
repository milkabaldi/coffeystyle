import { useState } from 'react'
import { Navbar } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white w-full overflow-hidden">
        <Navbar />
    </div>
  )
}

export default App
