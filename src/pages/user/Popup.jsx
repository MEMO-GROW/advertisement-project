import React from 'react'
import { Link } from 'react-router'
Link
const Popup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-96 ">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up?</h2>
          <div className='gap-5 w-full'>
          <div className='w-70 ml-2 flex justify-center items-center bg-blue-500 py-2 rounded-lg  hover:bg-blue-600 transition duration-200'>
          <Link to={'/signup'}
            className="  text-white"
          >Sign Up as a User
          </Link>
          </div>
          
          <div className='mt-4 w-70 ml-2 flex justify-center bg-blue-500 py-2 rounded-lg  hover:bg-blue-600 transition duration-200'>
            <Link to={'/vensignup'}
            className=" text-white "
          >Sign Up as a Vendor
          </Link>
          </div>
          </div>
          
        
      </div>
    </div>
  )
}

export default Popup