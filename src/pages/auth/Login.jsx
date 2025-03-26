import React from 'react'
import { Link } from 'react-router';
import { apiLogin } from '../../services/auth';

const Login = () => {
  // define 
  const handleSubmit = async(event) =>{
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const res = await apiLogin(formData);
      localStorage.setItem('token', res.data.accessToken);
      console.log(res);
      
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
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

            <div className="flex items-center justify-between mt-5">
              <label className="flex items-center text-sm text-gray-700">
                <input type="checkbox" className="mr-2" /> Remember Me
              </label>
              {/* use link instead a href, create a path for forget password */}
              <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot Password?</a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
          <div className='w-full flex justify-center py-4'>
            <p>Do not have an account? <Link to={'/signup'} className='text-blue-800'>SignUp</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login