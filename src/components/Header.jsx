import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='fixed top-0 right-0 left-0 h-[7rem] px-[4rem] text-white flex items-center justify-between z-50 '>
        <h1 className=' text-2xl font-extrabold'><span className='text-blue-900'>RAPID</span> TRANSPORT</h1>
        <ul className='flex space-x-24 font-poppins'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/services'>Service</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>
    </nav>
  )
}

export default Header