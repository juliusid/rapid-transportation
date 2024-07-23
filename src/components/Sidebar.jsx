import React from 'react'
import SidebarText from './SidebarText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faUser, faLock, faHistory, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const items = [
    { text: 'Profile', icon: faUser, href: '/dashbord' },
    { text: 'Change Password', icon: faLock, href: '/' },
    { text: 'Wallet', icon: faWallet, href: '/wallet' },
    { text: 'Scheduled Ticket', icon: faTicketAlt , href: '/' },
    { text: 'Tranfer History', icon: faHistory, href: '/'  },
  ];

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  return (
    <div className='fixed bg-white bottom-0 top-[5.1rem] right-[75%] left-0 py-7'>
        <div className=' w-full h-full space-y-8 flex flex-col pl-[1.5rem] '>
            <h1 className='font-poppins font-bold text-gray-700 text-2xl'>Account setting</h1>
            <div className='flex flex-col h-full space-y-8'>
               {items.map((item, index) =>(
                <SidebarText icon={item.icon} text={item.text} href={item.href} color={
                    currentPath == item.href? 'blue-900':'gray-400'
                }/>
               ))}
            </div>
        </div>

    </div>
  )
}

export default Sidebar;