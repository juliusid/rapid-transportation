import React from 'react'
import DashboardHeader from '../components/DashboardHeader'
import Sidebar from '../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Table from '../components/Table';

const Wallet = () => {
  return (
    <div className='bg-gray-300 h-screen'>
      <DashboardHeader/>
      <Sidebar />
      <div className='fixed bg-white bottom-0 top-[5.1rem] left-[25.2%] right-0 py-7 px-[2rem] space-y-7 overflow-y-scroll'>
        <div className='w-[95%] bg-blue-500/35 flex justify-between items-center px-[1rem] py-[2rem] rounded-lg'>
            <div className='flex flex-col items-center'>
                <h1 className='font-poppins font-bold text-2xl text-blue-500'>$1,550.56</h1>
                <p className='font-poppins text-xs text-blue-500'>Current wallet balance </p>
            </div>
            <Link to="fund-wallet" className='flex items-center space-x-3 bg-blue-500 py-[1rem] px-[2rem] rounded-lg'>
                <FontAwesomeIcon icon={faPlus} className="text-white font-bold" />
                <p className="text-white font-bold font-poppins">Add Money</p>
            </Link>
        </div>
            <h1 className='text-lg font-bold text-slate-500 font-poppins'>All transaction Details</h1>
            <div className='w-[95%] bg-slate-700 flex justify-between px-3 py-[1rem]'>
                <h1 className='text-white font- font-poppins'>Reciever Wallet</h1>
                <h1 className='text-white font- font-poppins'>Amount</h1>
                <h1 className='text-white font- font-poppins'>Type</h1>
                <h1 className='text-white font- font-poppins'>Status</h1>

            </div>
            <Table />
      </div>
    </div>
  )
}

export default Wallet