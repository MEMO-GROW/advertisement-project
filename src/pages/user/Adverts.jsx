
import React, { useEffect, useState } from 'react'
import { apiGetAllAdverts } from '../../services/adverts'
import AdvertsCard from '../../components/AdvertsCard'
import { useSearchParams } from 'react-router'


const Adverts = () => {
  const [searchParams] = useSearchParams();
  const [ads, setAds] = useState([]);
  //featching data from api//
  const getAds = async () => {
    try {
      const response = await apiGetAllAdverts({
        $or: [
          searchParams.get('search') ? { productName: { $regex: searchParams.get('search'), $options: 'i' } } : {},
          searchParams.get('category') ? { category: { $regex: searchParams.get('category'), $options: 'i' } } : {}
        ]
      });
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
        ads.map((ad) => {
          return (
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