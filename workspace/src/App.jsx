import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainpage from './components/Mainpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mainpage />
    </>
  )
}

export default App
