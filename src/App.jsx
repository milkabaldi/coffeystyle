import { useState } from 'react'
import { Navbar } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Hello Coffee Shop</h1>
        <Navbar />
      </div>
    </div>
  )
}

export default App
