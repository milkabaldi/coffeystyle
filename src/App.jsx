import { useState } from 'react'
import { Navbar, } from './components'
import { Mugs, Textx, Feautered, MoreMugs, Magazine, PreFooter, Blog, EmailUpdates } from './container'
import styles from './styles.js'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="bg-white w-full overflow-hidden">
      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <nav className={`${styles.boxWidth} flex justify-between items-center flex-row py-6`}>
          <Navbar />
        </nav>
      </header>
      <main>
        <Mugs />
        <Textx />
        <Feautered />
        <MoreMugs />
        <Magazine />
        <PreFooter />
        <Blog />
        <EmailUpdates />
      </main>
    </div>
  )
}

export default App
