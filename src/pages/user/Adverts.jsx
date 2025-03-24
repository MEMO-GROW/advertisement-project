import React, { useEffect, useState } from 'react'
import { apiGetAllAdverts } from '../../services/adverts'

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
    <div>Adverts</div>
  )
}

export default Adverts