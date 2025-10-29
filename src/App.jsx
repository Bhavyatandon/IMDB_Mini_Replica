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
    <h1 className='text-3xl font-bold bg-sky-100'>Hello</h1>
    <Navbar />
    <Routes>
      <Route path='/' element={<div>Home page loaded {<Home />}</div>} />
      <Route path='/watchlist' element={<div>Watchlist page loaded {<Watchlist />}</div>} />
      
    </Routes>
    </>
  )
}

export default App
