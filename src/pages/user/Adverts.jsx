
import React, { useEffect, useState } from 'react'
import { apiGetAllAdverts } from '../../services/adverts'
import AdvertsCard from '../../components/AdvertsCard'


const Adverts = () => {
  const [isLoading, setIsLoading] = useState (false);
  // fuction to fecth all ads
  const fetchAds = async () =>{
    setIsLoading(true);
    try {
      const res = await apiGetAllAdverts()
      console.log(res);
    } catch (error) {
      console.log(error); 
    } finally {
      setIsLoading(false);
    }
  }
  // calling useEffect hook to run the fecth products 
useEffect(() => {
  fetchAds();
}, [])
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-3 justify-center'>

      {
        [1,2].map((AdvertCard,index)=>{
          return(
            <AdvertsCard
            key={index}
            
            />
          )
        })
      }

    </div>
  )
}

export default Adverts