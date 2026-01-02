import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Watchlist from './Components/Watchlist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<div>{<Home />}</div>} />
      <Route path='/watchlist' element={<div>{<Watchlist />}</div>} />
      
    </Routes>
    </>
  )
}

export default App
