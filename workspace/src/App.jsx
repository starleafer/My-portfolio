import { useState } from 'react'
import Mainpage from './components/Mainpage'
import '../src/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mainpage />
    </>
  )
}

export default App
