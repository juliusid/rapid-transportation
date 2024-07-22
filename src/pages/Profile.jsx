import React from 'react';
import background from '../assets/images/bus.jpg';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <Layout>
        <Link to="/fund-wallet" className='mt-[5rem]'>Fund Wallet</Link>
    </Layout>
  )
}

export default Profile