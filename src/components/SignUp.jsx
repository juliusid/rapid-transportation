import React from 'react'

const SignUp = () => {
  return (
    <div>
    <nav className='fixed px-[3rem] py-[2rem]'>
    <h1 className=' text-2xl font-extrabold'><span className='text-blue-900'>RAPID</span> TRANSPORT</h1>

    </nav>
    
    <form className=' h-[100vh] flex items-center justify-center bg-gray-300 overflow-scroll pt-[30rem] pb-5' method='POST'>


        <div className=' flex flex-col space-y-4 items-start justify-center bg-white px-[1.5rem] py-[2rem] rounded-lg shadow-2xl shadow-gray-500' >

        <div className='flex flex-col space-y-1'>
                <label htmlFor="#fullName" className='font-poppins mt-4'>
                    Full Name
                </label>
                <input type="email" id='fullName' name='fullName' required className='w-[30rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='JohnSmith21@gmail.com'/>

        </div>

        <div className='flex flex-row space-x-5'>
              <div className='flex flex-col space-y-1'>
                <label htmlFor="#DOB" className='font-poppins mt-4'>
                   DOB
                </label>
                <input type="date" id='DOB' name='DOB' required className='w-[14.5rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='JohnSmith1234'/>

              </div>

              <div className='flex flex-col space-y-1'>
                <label htmlFor="#phoneNumber" className='font-poppins mt-4'>
                   Phone Number
                </label>
                <input type="text" id='phoneNumber' name='phoneNumber' required className='w-[14.5rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='080887766565'/>

              </div>

        </div>

        <div className='flex flex-col space-y-1'>
                <label htmlFor="#gender" className='font-poppins mt-4'>
                    Gender
                </label>
                <select  id='gender' name='gender' required className='w-[30rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins'>
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>

        </div>

        <div className='flex flex-col space-y-1'>
                <label htmlFor="#email" className='font-poppins mt-4'>
                    Email Adress
                </label>
                <input type="email" id='email' name='email' required className='w-[30rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='JohnSmith21@gmail.com'/>

        </div>

        <div className='flex flex-col space-y-1'>
                <label htmlFor="#nof" className='font-poppins mt-4'>
                    Next Of Kin
                </label>
                <input type="text" id='nof' name='nof' required className='w-[30rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='John Smiith'/>

        </div>

        <div className='flex flex-col space-y-1'>
                <label htmlFor="#nofNumber" className='font-poppins mt-4'>
                    Next Of Kin Number
                </label>
                <input type="text" id='nofNumber' name='nofNumber' required className='w-[30rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='JohnSmith21@gmail.com'/>

        </div>

        <div className='flex flex-col space-y-1'>
                <label htmlFor="#password" className='font-poppins mt-4'>
                    Password
                </label>
                <input type="password" name='password' required id='password' className='w-[30rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='JohnSmith1234'/>

        </div>
      

        <div className='flex flex-col space-y-1'>
                <label htmlFor="#confirmPassword" className='font-poppins mt-4'>
                   Confirm Password
                </label>
                <input type="password" id='confirmPassword' name='confirmPassword' required className='w-[30rem] h-[3rem] border-gray-400 border-solid border-[1px] px-3 font-poppins' placeholder='JohnSmith1234'/>

        </div>

        <button type='sumbit' className='mt-4 bg-blue-400 text-white font-poppins px-[6rem] py-[1rem] text-lg '> Login</button>

        </div>
    </form>
</div>
  )
}

export default SignUp