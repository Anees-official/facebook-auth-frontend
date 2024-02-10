import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="main w-full flex flex-col md:flex-row">
      <div className='left lg:h-screen text-center lg:pl-44 md:w-2/4 pt-4 md:text-center md:mt-44 md:pl-14'>
        <h1 className='font-bold text-6xl text-blue-600 md:text-start'>facebook</h1>
        <p className='font-semibold px-14 md:p-0 text-xl lg:text-3xl lg:p-0 md:text-start'>Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div className="right md:w-2/4 md:justify-center mt-10 md:mt-24 xl:h-3/4">
        <div className="items">
        <div className="input-box bg-white">
          <form action="" className='flex flex-col'>
            <input className='input-1 text-start'
              placeholder='Enter Your Email Adress'/>
              <input className='input-1 text-start'
              placeholder='Enter Your Password'/>
              <div className="text-center">
                <button className='text-center bg-blue-600 px-40 py-2 m-2 text-2xl font-bold text-white rounded-lg'>Log in</button>
              </div>
              
              <p className='text-center cursor-pointer text-blue-700'>Forgotten Password</p>
              <hr className='m-4'/>
              <div className='text-center'>
                <button className=' text-white text-center bg-green-500 text-2xl p-4 mx-16 rounded-lg'><Link href="/signup">Create new Account</Link></button>
              </div>
              
          </form>
        </div>
        <p className='text-lg p-4'><Link href="/about" className='font-semibold'>Create a Page</Link> for a celebrity, brand or business.</p>
              
        </div>
      </div>
    </div>
    </>
  )
}

export default page