import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './components/details'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div class="clockistime"> 
      <div>   
        <h1>Bharat times</h1>
         <Detail></Detail>
     </div>
    
    </div>

  )
}

export default App
