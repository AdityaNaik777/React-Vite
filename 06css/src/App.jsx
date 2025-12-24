import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Button/>
    </div>

  )
}

export default App
