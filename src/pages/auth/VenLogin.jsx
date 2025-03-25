import React from 'react'
import { Link } from 'react-router';


const VenLogin = () => {
  return (
  
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Vendor Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" className="mr-2" /> Remember Me
            </label>
            {/* use link instead a href, create a path for forget password */}
            <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Login
          </button>

          <div className='w-full flex justify-center py-4'>
            <p>Do not have an account? <Link to={'/vensignup'} className='text-blue-800'>SignUp</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VenLogin