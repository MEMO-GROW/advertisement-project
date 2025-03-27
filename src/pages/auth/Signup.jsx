import React, { useEffect } from 'react'
import { apiSignup } from '../../services/auth';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';


const Signup = () => {
  const navigate = useNavigate() //for navigation
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    try {
      const response = await apiSignup(formData);
      const role = response.data.role; //grabing the role
      console.log(response)
      navigate('/login');
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              name="username"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div>
            <label htmlFor="business category" className='block text-sm font-medium text-gray-700'>Role</label>
            <select name='role' className="w-full px-4 py-2 mt-1 border rounded-lg" required>
              <option value="user">User</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full mt-5 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
          <div className='w-full flex justify-center py-4'>
            <p>Already have an account? <Link to={'/login'} className='text-blue-800'>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}



export default Signup