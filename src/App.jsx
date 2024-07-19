import { useState } from 'react'
import Logos from './Components/Logos'
import './App.css'
import Button from './Components/Button'
import LogoObjects from './Components/LogoData'


function App() {
  const [count, setCount] = useState(0)
  

  function handleClick(){
    setCount((count) => count + 1)
  }

  return (
    <>
      <div>
        <Logos obj={LogoObjects}/>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button handleClick={handleClick} count={count}/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
