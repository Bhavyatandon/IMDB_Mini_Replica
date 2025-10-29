import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex space-x-8 items-center pl-3'>
      <Link to='/'><img src={logo} height={100} width={100} alt='imdb-log'/>
      </Link>
      <Link to={'/'} className='text-blue-500 text-2xl'>Home</Link>
      <Link to={'/watchlist'} className='text-blue-500 text-2xl'>watchlist</Link>

    </div>
  )
}

export default Navbar
