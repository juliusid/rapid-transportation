import React from 'react'

const LogIn = () => {
  return (
    <div>
        <nav className='fixed px-[3rem] py-[2rem]'>
        <h1 className=' text-2xl font-extrabold'><span className='text-blue-900'>RAPID</span> TRANSPORT</h1>

        </nav>
        
        <form className=' h-[100vh] flex items-center justify-center bg-blue-800/30'>

            <div className=' flex flex-col space-y-4 items-start justify-center' method='POST'>
            <div className='flex flex-col space-y-1'>
                    <label htmlFor="#card" className='font-poppins mt-4'>
                        Email Adress
                    </label>
                    <input type="email" id='card' className='w-[30rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='JohnSmith21@gmail.com'/>

            </div>

            <div className='flex flex-col space-y-1'>
                    <label htmlFor="#card" className='font-poppins mt-4'>
                        Password
                    </label>
                    <input type="password" id='card' className='w-[30rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='JohnSmith1234'/>

            </div>

            <button type='sumbit' className='mt-4 bg-blue-400 text-white font-poppins px-[6rem] py-[1rem] text-lg '> Login</button>

            </div>
        </form>
    </div>
  )
}

export default LogIn