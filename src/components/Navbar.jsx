import React from 'react'

import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='flex flex-col items-center py-4'>
      <div className='text-center'>
      <h1 className='text-3xl font-bold'>MEMO</h1>
      <p className='text-sm text-gray-500'>made on earth for humans</p>
      </div>

      <div className='flex space-x-6 mt-5 text-sm font-bold'>
        <Link to={'landing'}>HOME</Link>
        <span>|</span>
        <Link to={'adverts'}>COLLECTIONS</Link>
        <span>|</span>
        <Link to={''}>CONTACT</Link>
        <span>|</span>
      </div>
    </nav>
  )
}

export default Navbar