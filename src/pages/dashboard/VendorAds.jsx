import React from 'react'
import VenderAdsCard from '../../components/VenderAdsCard'


const VendorAds = () => {
  return (

    <div>

<div className="flex items-center justify-center ">
  <h1 className="text-4xl font-extrabold mb-3">Ads Added</h1>
</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 justify-center'>

{
  [1,2,3,4,5,6].map((card, index) => {
    return(
      <VenderAdsCard
      key={index}
      
      />
    )
  })
}




</div>
    </div>



    
    
  )
}

export default VendorAds