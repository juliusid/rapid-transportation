import React from 'react'
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faUser, faLock, faHistory, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

const SidebarText = ({icon, text, href, color}) => {


  return (
    <Link to={href} className='flex items-center space-x-3'>
        <FontAwesomeIcon icon={icon} className={`text-${color}`} />
        <h1 className={`font-poppins text-base text-${color}`}>{text}</h1>
    </Link>
  )
}

export default SidebarText