import { useState } from 'react'
import './App.css'
import Maths from './Maths'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Maths</h1>
      <Maths />
    </div>
  )
}

export default App
