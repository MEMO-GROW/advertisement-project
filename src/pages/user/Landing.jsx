import React from 'react'
import { MapPinIcon } from 'lucide-react'
import { HeartIcon } from 'lucide-react'
import CategoryCard from '../../components/CategoryCard'
import LatestAds from '../../components/LatestAds'

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
                <MapPinIcon />
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


      {/* category cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 p-3 justify-center w-[60%] ml-[20%]'>
        {
          [1, 2, 3, 4, 5].map(
            (CatCard, index) => {
              return (
                <CategoryCard
                  key={index}

                />
              )
            }
          )
        }

      </div>

      {/* latest cards */}
      <div className='py-12 bg-gray-50 text-center -mb-10 w-full'>
        <h1 className='text-3xl font-bold text-gray-800'>Latest Ads</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-3 justify-center w-[80%] ml-[10%]'>
          {
            [1, 2, 3, 4].map((LatAds, index) => {
              return (
                <LatestAds
                  key={index} />
              )
            }
            )
          }
        </div>

      </div>


      <div className="h-screen md:w-1/2 mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-light mb-6">Our Story</h2>
        <div className="w-24 h-1 bg-gray-200 mb-8 mx-auto"></div>
        <p className="text-gray-600 leading-relaxed mb-8">
          Founded in 2018, ELEGANCE was born from a passion for creating
          timeless pieces that blend modern trends with classic design.
          Our commitment to quality materials and ethical manufacturing
          ensures that each item in our collection is not only beautiful
          but sustainably produced.
        </p>
        <p className="text-gray-600 leading-relaxed mb-12">
          We believe that fashion should be accessible, versatile, and
          expressive. Our team of designers work tirelessly to bring you
          collections that help you look and feel your best, whatever the
          occasion.
        </p>
        <button className="px-8 py-3 border border-gray-900 text-gray-900 font-medium transition duration-300 hover:bg-gray-900 hover:text-white">
          Read More About Us
        </button>
      </div>
    </div>




  )
}

export default Landing