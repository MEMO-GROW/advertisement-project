import React from 'react'

import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='flex flex-col items-center py-4 bg-[#E6E6E6] '>
      <div className='text-center'>
      <h1 className='text-3xl font-bold'>MEMO_TRENDS</h1>
      <p className='text-sm text-gray-500'>made on earth for humans</p>
      </div>

     
     <div className='flex space-x-6 mt-5 text-sm font-bold'>
        <Link to={'landing'} className='hover:text-blue-600'>HOME</Link>
        <span>|</span>
        <Link to={'adverts'} className='hover:text-blue-600'>COLLECTIONS</Link>
        <span>|</span>
        <Link to={'/contact'} className='hover:text-blue-600'>CONTACT</Link>
        <span>|</span>
      </div>

       {/* Logout and Register buttons */}
       <div className="ml-auto flex space-x-4 mr-20">
        <Link to={'/vensignup'} className="px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600">
          Register
        </Link>
        <Link to={''} className="px-4 py-2 bg-black text-white rounded-lg hover:bg-red-600">
          Logout
        </Link>
      </div>
    
    </nav>
  )
}

export default Navbar