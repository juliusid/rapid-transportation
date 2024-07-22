import React from 'react';
import background from '../assets/images/bus.jpg';
import card from '../assets/images/card.png';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const FundWallet = () => {
  return (
    <Layout>
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat', 
                height: '120vh',
                width: '100%',
                position:"relative",
                paddingTop: '3rem'
            }}
        >
           <div className=' w-full h-full absolute flex flex-col  items-center justify-center space-y-3'>
                <h1 className='text-white font-poppins font-bold text-2xl'>WALLET PAYMENT FORM</h1>

            <div className='flex '>
                <div className='bg-black/30 h-full py-[2rem]  px-[1.5rem] space-y-[2rem] '>
                    <h1 className='font-poppins text-gray-200'>Account Details</h1>
                    <div>
                        <h1 className='text-white font-poppins text-lg font-bold'>
                            Account Number
                        </h1>
                        <p className='font-poppins text-gray-300 text-sm'>
                            20eu390ry3r92230rixd
                        </p>
                    </div>

                    <div>
                        <h1 className='text-white font-poppins text-lg font-bold'>
                            Manufactered Date
                        </h1>
                        <p className='font-poppins text-gray-300 text-sm'>
                            20th of July, 2024
                        </p>
                    </div>
                    <div>
                        <h1 className='text-white font-poppins text-lg font-bold'>
                            Account Owner
                        </h1>
                        <p className='font-poppins text-gray-300 text-sm'>
                           John Smith
                        </p>
                    </div>

                    <div>
                        <h1 className='text-white font-poppins text-lg font-bold'>
                            Last Transfer
                        </h1>
                        <p className='font-poppins text-gray-300 text-sm'>
                            2.05$
                        </p>
                    </div>

                    <div>
                        <h1 className='font-poppins text-white font-bold'>Wallet Balace</h1>
                        <p className='font-poppins text-white font-light'>0.00$</p>
                    </div>
                </div>
                <div className='bg-white px-[1rem] py-[2rem]'>
                    <h1 className='text-red-500 font-poppins'>Payment Method</h1>
                    <div>
                        <img src={card} className='w-[10rem] h-[4rem] object-contain'/>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label htmlFor="#card" className='font-poppins mt-4'>
                            Name on Card
                        </label>
                        <input type="text" id='card' className='w-[30rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='John Smith'/>
                        <div className='flex space-x-3'>
                          <div className='flex flex-col'>
                            <label htmlFor="#cardNumber" className='font-poppins mt-4'>
                            Card Number
                            </label>
                            <input type="text" id='cardNumber' className='w-[14.7rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='John Smith'/>
                         </div>  

                         <div className='flex flex-col'>
                            <label htmlFor="#cvv" className='font-poppins mt-4'>
                            CVV
                            </label>
                            <input type="text" id='cvv' className='w-[14.7rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='John Smith'/>
                         </div>  
                        </div>
                        <label htmlFor="#edate" className='font-poppins mt-4'>
                            Expiration Date
                        </label>
                        <input type="date" id='edate' className='w-[30rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='MM/YY'/>

                        <label htmlFor="#funds" className='font-poppins mt-4'>
                            Amount to fund
                        </label>
                        <input type="text" id='funds' name='funds' className='w-[30rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='3000'/>

                        <button type='sumbit' className='mt-4 bg-blue-400 text-white font-poppins px-[6rem] py-[1rem] text-lg '> Fund Wallet</button>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </Layout>
  )
}

export default FundWallet