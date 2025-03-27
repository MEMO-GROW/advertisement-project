import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-[url('assets/images/image4.png')] bg-no-repeat bg-cover bg-center bg-opacity-5 ">
      <div className="bg-black opacity-60 w-full h-full  absolute"></div>
        <div className='relative w-[70%] flex flex-col justify-center px-4 sm:px-6 lg:px-8 h-full'>
        <div className='w-[100%]  max-w-5xl mx-auto text-center'>
            <h1 className='tracking-widest font-extrabold text-white sm:text-5xl md:text-8xl'>MEMO</h1>
           <p className='mt-3 text-2xl text-gray-300'>Redefining Fashion. Inspiring Confidence</p>
        </div>

        <div className='mt-8 flex justify-center'>
            <Link to="/popup" className='px-8 py-3 border border-transparent text-base font-medium rounded-md  backdrop-blur-lg bg-opacity-5 hover:bg-gray-500 md:py-4 md:text-lg md:px-10'>Explore Collections</Link>
        </div>
        </div>
    </div>

    
  )
}

export default Hero

// import React, { useState } from 'react';
// import { Link } from 'react-router';

// const Hero = () => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = (e) => {
//     e.preventDefault();
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-black'>
//       <div className='flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-amber-200'>
//         <div className='bg-amber-950 max-w-3xl mx-auto text-center'>
//           <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl'>MEMO</h1>
//           <p className='mt-3 text-xl text-gray-300'>Redefining Fashion. Inspiring Confidence</p>
//         </div>

//         <div className='mt-8 flex justify-center'>
//           <button 
//             onClick={openModal} 
//             className='px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white hover:bg-gray-200 md:py-4 md:text-lg md:px-10'
//           >
//             Explore Collections
//           </button>
//         </div>
//       </div>

//       {/* Sign In Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
//               <button 
//                 onClick={closeModal} 
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
            
//             <div className="space-y-4">
//               <p className="text-gray-700 mb-4">Please select how you want to continue:</p>
              
//               <Link 
//                 to="/user-signin" 
//                 className="w-full flex items-center justify-center px-4 py-3 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition-colors"
//               >
//                 Continue as User
//               </Link>
              
//               <Link 
//                 to="/client-signin" 
//                 className="w-full flex items-center justify-center px-4 py-3 border border-amber-800 text-amber-800 rounded-md hover:bg-amber-50 transition-colors"
//               >
//                 Continue as Client
//               </Link>
              
//               <div className="pt-4 text-center">
//                 <p className="text-sm text-gray-600">
//                   Don't have an account? 
//                   <Link to="/signup" className="text-amber-800 hover:underline ml-1">
//                     Sign up
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hero;













