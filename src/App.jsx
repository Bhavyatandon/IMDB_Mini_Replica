import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'

import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl font-bold bg-sky-100'>Hello</h1>
    <Navbar />
    <Routes>
      <Route path='/' element={<div>Home page loaded</div>} />
      <Route path='/watchlist' element={<div>Watchlist page loaded</div>} />
      
    </Routes>
    </>
  )
}

export default App
