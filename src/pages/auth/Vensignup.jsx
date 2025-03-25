import React from 'react'
import { Link } from 'react-router'


const Vensignup = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-lg p-8 space-y-6 bg-white rounded-2xl shadow-md'>
        <h2 className='text-2xl font-bold text-center text-gray-800'>Vendor SignUp</h2>
        <form className='space-y-4'>
          <div>
           <label htmlFor="Business Name" className='block text-sm font-medium text-gray-700'>Business Name</label>
            <input className="w-full px-4 py-2 mt-1 border rounded-lg "
          type="text"
          name='businessName'
          placeholder='Enter Business Name' 
          required/>
          </div>

          <div>
            <label htmlFor="contact person name" className='block text-sm font-medium text-gray-700'>Contact Person Name</label>
            <input  className='w-full px-4 py-2 mt-1 border rounded-lg'
             type="text"
             name='contactPerson'
          placeholder='Enter contact person name'
          required />
          </div>

          <div>
            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
          <input  className='w-full px-4 py-2 mt-1 border rounded-lg '
           type="email"
           name='email'
          placeholder='Enter email'
          required/>
          </div>

        <div>
          <label htmlFor="phone number" className='block text-sm font-medium text-gray-700'>Phone Number</label>
        <input  className='w-full px-4 py-2 mt-1 border rounded-lg '
        type="tel"
        name='phoneNumber'
          placeholder='Enter phone number'
          required />
        </div>

         <div>
          <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
         <input  className='w-full px-4 py-2 mt-1 border rounded-lg'
         type="password" 
         name='password'
          placeholder='Enter password'
          required/>
         </div>

         <div>
          <label htmlFor="confirm password" className='block text-sm font-medium text-gray-700'>Confirm Password</label>
         <input  className='w-full px-4 py-2 mt-1 border rounded-lg '
         type="password"
         name='confirmPassword'
          placeholder='Confirm password'
          required/>
         </div>

         <div>
          <label htmlFor="business address" className='block text-sm font-medium text-gray-700'>Business Address</label>
         <input  className='w-full px-4 py-2 mt-1 border rounded-lg '
         type="text"
         name='businessAdress'
          placeholder='Enter business address'
          required />
         </div>

         <div>
          <label htmlFor="business category" className='block text-sm font-medium text-gray-700'>Business Category</label>
          <select className="w-full px-4 py-2 mt-1 border rounded-lg " required>
            <option value="">Select Category</option>
            <option value="events">Event Ads</option>
            <option value="products">Products Ads</option>
          </select>
         </div>

          <div>
            <label htmlFor="website" className='block text-sm font-medium text-gray-700'>Website (Optional)</label>
          <input   className='w-full px-4 py-2 mt-1 border rounded-lg '
           type="url"
           name='website'
          placeholder='Enter website URL' />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Logo (Optional)</label>
            <input type="file" className="w-full px-4 py-2 mt-1 border rounded-lg " />
          </div>

          <div>
            <input className='w-4 h-4 text-indigo-600 border-b-gray-300'
             type="checkbox" 
              required/>
            <label htmlFor="terms and conditions" className='ml-2 text-sm text-gray-700'>I agree to the terms and conditions</label>
          </div>

          <button type='submit' className='w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-fuchsia-500 '>Sign Up</button>
        </form>

        <div className='w-full flex justify-center py-4'>
            <p>Already have an account? <Link to={'/venlogin'} className='text-blue-800'>Login</Link></p>
          </div>
      </div>
    </div>
  )
}

export default Vensignup