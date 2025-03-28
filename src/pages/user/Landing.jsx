import React, { useEffect, useState } from 'react'
import { Heart, MapPinIcon } from 'lucide-react'
import { HeartIcon } from 'lucide-react'
import CategoryCard from '../../components/CategoryCard'
// import LatestAds from '../../components/LatestAds'
import { Link } from 'react-router'
// import { apiGetAllAdverts } from '../../services/adverts'

const Landing = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const titles = [{ title: "Clothing", icon: Heart }, { tilte: "Footwear", icon: Heart }, { tilte: "Bags and Wallets", icon: Heart }, { tilte: "Accessories", icon: Heart }]


  return (
    <div>
      {/* Hero page */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen bg-[url('assets/images/image5.png')] bg-no-repeat bg-cover bg-center">
        <div className="bg-black opacity-30 w-full h-full  absolute"></div>
        <div className=' text-center bg-transparent backdrop-blur-lg rounded-2xl p-5 '>
          <h1 className='text-4xl text-white font-bold'>Elegance Within Reach. Where Fashion Awakens Desire</h1>
          <p className='mt-2 text-xl text-white'>Browse over 15 million exquisite fashion and accessory pieces, with new styles curated daily</p>
        </div>

        {/* search bar section */}
        <div className='w-full max-w-4xl p-4 bg-transparent backdrop-blur-lg rounded-lg mt-5 justify-center items-center'>
          <div className='flex flex-wrap md:flex-nowrap gap-3 px-4 py-4 rounded-lg shadow-md w-full text-whit items-center justify-center '>

            <div className='w-full md:w-64'>
              <input type="text"
                placeholder='What are you looking for?'
                value={search}
                onChange={e => setSearch(e.target.value)}
                className='w-full px-4 py-2 rounded-md border outline-none'
              />
            </div>

            {/* <div className='relative w-full md:w-48'>
              <input type="text"
                placeholder='Location'
                className='w-full px-4 py-2 rounded-md border outline-none'
              />
              <div className='absolute right-3 top-2'>
                <MapPinIcon />
              </div>
            </div> */}

            <div className='w-full md:w-40'>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className='w-full px-4 py-2 rounded-md border outline-none'>
                <option value="">All Categories</option>
                <option value="clothing">Clothing</option>
                <option value="footwear">Footwear</option>
                <option value="bags and wallet">Bags and Wallet</option>
                <option value="jewelry and watches">Jewelry and Watches</option>
                <option value="accessories">Accessories</option>
                <option value="comestics">Cometics</option>
              </select>
            </div>



            <Link to={`/adverts?${search && `search=${search}`}${category && `&category=${category}`}`} className='w-full md:w-auto px-6 py-2 rounded-md bg-black text-white hover:bg-blue-800'>
              Search
            </Link>
          </div>
        </div>
      </div>


      {/* category cards */}
      <div className='flex items-center justify-center flex-col gap-7 bg-gray-100'>
        <h1 className='text-3xl font-bold text-gray-800 p-5'>Popular Categories</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 p-3 justify-center w-[60%]'>

        <div className="p-5 flex flex-col items-center rounded-lg bg-white shadow-md border border-gray-200">
                <span className="text-4xl text-blue-800"><HeartIcon/></span>
                <p className="mt-2 font-semibold text-gray-800">Clothing</p>
                <p className="text-sm text-gray-500">Trending now</p>
            </div>

            <div className="p-6 flex flex-col items-center rounded-lg bg-white shadow-md border border-gray-200">
                <span className="text-4xl text-blue-800"><HeartIcon/></span>
                <p className="mt-2 font-semibold text-gray-800">Footwear</p>
                <p className="text-sm text-gray-500">Trending now</p>
            </div>

            <div className="p-6 flex flex-col items-center rounded-lg bg-white shadow-md border border-gray-200">
                <span className="text-4xl text-blue-800"><HeartIcon/></span>
                <p className="mt-2 font-semibold text-gray-800">Bags & Wallets</p>
                <p className="text-sm text-gray-500">Trending now</p>
            </div>

            <div className="p-6 flex flex-col items-center rounded-lg bg-white shadow-md border border-gray-200">
                <span className="text-4xl text-blue-800"><HeartIcon/></span>
                <p className="mt-2 font-semibold text-gray-800">Jewelry & Watches</p>
                <p className="text-sm text-gray-500">Trending now</p>
            </div>

            <div className="p-6 flex flex-col items-center rounded-lg bg-white shadow-md border border-gray-200">
                <span className="text-4xl text-blue-800"><HeartIcon/></span>
                <p className="mt-2 font-semibold text-gray-800">Cosmetics</p>
                <p className="text-sm text-gray-500">Trending now</p>
            </div>
          {/* {
            titles.map(
              (CatCard, index) => {
                return (
                  <CategoryCard
                    key={index}
                    title={CatCard.title}
                    icon={< CatCard.icon />}
                  />
                )
              }
            )
          } */}

        </div>
      </div>

      {/* latest cards */}
      {/* <div className='py-12 bg-gray-50 text-center -mb-10 w-full'>
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

    </div> */}


      <div className="bg-[#E6E6E6]">
        <div className="h-screen w-full md:w-3/4 lg:w-1/2 mx-auto flex items-center justify-center">
          <div className="bg-[url('assets/images/image2.png')] bg-cover bg-repeat h-full w-full flex flex-col items-center px-4 sm:px-30 md:px-20 lg:px-40">
            <h2 className="text-3xl md:text-4xl font-light text-center mt-30">Our Story</h2>

            <p className="text-gray-800 text-sm sm:text-base leading-relaxed  my- text-center p-5">
              Founded in 2018, MEMO_TRENDS was born from a passion for creating timeless pieces that blend modern
              trends with classic design. Our commitment to quality materials and ethical manufacturing
              ensures that each item in our collection is not only beautiful but sustainably produced.
            </p>

            <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb text-center p-5">
              We believe that fashion should be accessible, versatile, and expressive. Our team of designers
              work tirelessly to bring you collections that help you look and feel your best, whatever the occasion.
            </p>
          </div>
        </div>
      </div>



    </div>


  )
}

export default Landing