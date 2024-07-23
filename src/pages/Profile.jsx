import React from 'react';
import background from '../assets/images/bus.jpg';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';
import Detial from '../components/Detial';

const details = [
  { detail: 'Fullname', value: "John Smith"},
  { detail: 'DOB', value: "24/04/2005"},
  { detail: 'Gender', value: "male"},
  { detail: 'Email', value: "johnsmith21@gmail.com"},
  { detail: 'Phone Number', value: "0805435524819"},
];


const Profile = () => {
  return (
    <div className='bg-gray-300 h-screen'>
      <DashboardHeader/>
      <Sidebar />
      <div className='fixed bg-white bottom-0 top-[5.1rem] left-[25.2%] right-0 py-7 px-[2rem] space-y-7 overflow-y-scroll'>
        {details.map((item, index) =>(
          <Detial detail={item.detail} value={item.value}/>
        ))}
        <div>

        <Link className='bg-blue-800 text-white px-[3rem] py-[1rem]'>Edit details</Link>
        </div>

      </div>
    </div>
  )
}

export default Profile