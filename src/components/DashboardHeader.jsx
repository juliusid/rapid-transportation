import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faChevronDown   } from '@fortawesome/free-solid-svg-icons';


const DashboardHeader = () => {
  return (
    <nav className=' bg-white fixed left-0 right-0 flex justify-between items-center h-[5rem] px-[4rem]'>
        <Link to="/" className=' text-2xl font-extrabold'><span className='text-blue-900'>RAPID</span> TRANSPORT</Link>
        <div className='flex space-x-10'>
            <div className='flex items-center space-x-2'>
                <FontAwesomeIcon icon={faWallet} className='text-slate-500' />
                <h1 className='text-slate-500 font-poppins font-bold'>$20.66</h1>
            </div>
            <Link to='fund-wallet' className='font-poppins font-bold'>Fund wallet</Link>
            <div className='flex items-center space-x-2'>
                <h1 className='font-poppins font-bold'>John Smith</h1>
                <FontAwesomeIcon icon={faChevronDown } />
            </div>

        </div>
    </nav>
  )
}

export default DashboardHeader