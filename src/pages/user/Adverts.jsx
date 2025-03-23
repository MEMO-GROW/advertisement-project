import React from 'react'
import AdvertsCard from '../../components/AdvertsCard'

const Adverts = () => {
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