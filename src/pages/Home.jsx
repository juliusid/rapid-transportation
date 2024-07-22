import React from 'react';
import background from '../assets/images/bus.jpg';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import '../App.css'


const Home = () => {
  return (
    <Layout>
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat', 
                height: '100vh',
                width: '100%',
                position:"relative"
            }}
        >
            <div className='w-full h-full  bg-blue-700/30 absolute grid grid-cols-2 items-center justify-center'>
                <div className='px-[4rem]'>
                    <h1 className='font-poppins text-white text-xl mb-3'>Welcome to </h1>
                    <h1 className='font-poppins text-white text-7xl font-semibold mb-7 '>RAPID <span className='border-b-4 border-blue-700 border-solid'>TRANSPORT</span></h1>
                    <p className='font-poppins mb-10 text-white max-w-[90%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quidem beatae doloribus distinctio atque voluptatum?</p>
                    <div className='space-x-4'>
                        <Link className='bg-blue-500 text-white font-poppins px-[1.5rem] py-[1rem]'>Book a ride</Link>
                        <Link className='bg-gray-500 text-white font-poppins px-[1.5rem] py-[1rem]'>Find out more</Link>
                    </div>
                </div>
                <div className='h-full  w-full flex items-center justify-center'>
                    <div className='h-[30rem] w-[35rem] bg-black/35'>
                        <div className='w-full flex  justify-center h-[4rem] border-b-[1.5px] border-gray-400'>
                            <button className='text-white font-poppins font-semibold text-2xl  '>Book a Ticket</button>
                        
                        </div>
                        <div className='flex flex-col space-y-5 w-full  items-center justify-center'>

                            <label htmlFor="#route" className='font-poppins mt-[3rem] text-white text-start w-[30rem]'>
                                Choose a route
                            </label>
                            <select  id='route' name='route' required className='w-[30rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins outline-none bg-transparent text-white '>
                            <option value="ikeja-surulere" className=' checked:bg-transparent'>ikeja-surulere</option>
                            <option value="ikeja-surulere " className='transparent'>ikeja-surulere</option>
                            </select>

                        </div>

                        <div className='w-full h-[57%] flex items-end' >
                            <div className='p-[2rem] border-white border-solid border-t-[1.5px] w-full flex justify-between'>
                            <p className='text-white font-poppins'>Total price :</p>
                            <p className='text-white font-poppins'>$300</p>
                            
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                    <div> 
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Home;
