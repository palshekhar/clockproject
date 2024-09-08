import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './components/details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>    
    <h1>Bharat times</h1>
    <Detail></Detail>
    
    
    </div>

  )
}

export default App
