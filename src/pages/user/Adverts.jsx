
import React, { useEffect, useState } from 'react'
import { apiGetAllAdverts } from '../../services/adverts'
import AdvertsCard from '../../components/AdvertsCard'


const Adverts = () => {
  const [ads, setAds] = useState([]);
  //featching data from api//
  const getAds = async () => {
    try {
      const response = await apiGetAllAdverts();
      setAds(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAds();
  }, []);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-3 justify-center'>

      {
        ads.map((ad)=>{
          return(
            <AdvertsCard
            key={ad.id} ad={ad}
            
            />
          )
        })
      }

    </div>
  )
}

export default Adverts