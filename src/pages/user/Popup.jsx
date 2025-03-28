import React from 'react'
import { Link } from 'react-router'
Link
const Popup = () => {
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-[url('assets/images/image4.png')] bg-no-repeat bg-cover bg-center relative">
  {/* Dark Overlay */}
  <div className="bg-black opacity-50 w-full h-full absolute"></div>

  {/* Amber-colored container */}
  <div className="bg-transparent backdrop-blur-lg w-3/4 md:w-2/3 lg:w-1/2 p-8 md:p-12 lg:p-16 rounded-xl z-10 flex justify-center items-center">
    
    {/* White Box (Sign-Up Section) */}
    <div className="bg-white p-10 rounded-2xl shadow-lg w-80 md:w-96">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up</h2>
      
      <div className="gap-5 w-full">
        {/* Sign Up as User Button */}
        <div className="w-full flex justify-center items-center bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          <Link to={'/signup'} className="text-white">Sign Up as a User</Link>
        </div>

        {/* Sign Up as Vendor Button */}
        <div className="mt-4 w-full flex justify-center bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          <Link to={'/vensignup'} className="text-white">Sign Up as a Vendor</Link>
        </div>
      </div>

    </div>
  </div>
</div>

  )
}

export default Popup