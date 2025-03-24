import React from 'react'
import { MapPinIcon } from 'lucide-react'
import { HeartIcon } from 'lucide-react'

const Landing = () => {
  return (
    <div>
      {/* Hero page */}
      <div className='relative z-10 flex flex-col items-center justify-center h-screen'>
        <div className='bg-amber-500 text-center'>
          <h1 className='text-4xl font-bold'>Elegance Within Reach. Where Fashion Awakens Desire</h1>
          <p className='mt-2 text-xl'>Browse over 15 million exquisite fashion and accessory pieces, with new styles curated daily</p>
        </div>

        {/* search bar section */}
        <div className='w-full max-w-4xl p-4'>
        <div className='flex flex-wrap md:flex-nowrap gap-3 px-4 py-4 rounded-lg shadow-md w-full '>
          
          <div className='w-full md:w-64'>
          <input type="text" 
          placeholder='Search for'
          className='w-full px-4 py-2 rounded-md border outline-none'
          />
          </div>

          <div className='relative w-full md:w-48'>
          <input type="text"
          placeholder='Location'
          className='w-full px-4 py-2 rounded-md border outline-none'
          />
          <div className='absolute right-3 top-2'>
           <MapPinIcon/>
          </div>
          </div>

            <div className='w-full md:w-40'>
              <select className='w-full px-4 py-2 rounded-md border outline-none'>
                <option value="">All Categories</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
            </div>

        

          <button className='w-full md:w-auto px-6 py-2 rounded-md bg-blue-950 text-white hover:bg-blue-800'>
            Search
          </button>
        </div>
        </div>
      </div>

     
   
    </div>


  )
}

export default Landing