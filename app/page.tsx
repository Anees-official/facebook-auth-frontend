import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
   <>
   <div className='m-8 text-center text-white'>
   <Link className='p-4 bg-blue-600' 
   href="/signup">
    Sign Up 
   </Link>
   
   <Link className='p-4 bg-blue-600 m-5' 
   href="/login">
    Login
    </Link>
     </div>
   </>
  )
}

export default HomePage