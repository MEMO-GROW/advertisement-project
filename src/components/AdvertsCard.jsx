import { Disc, MapIcon, MapPinIcon, ReceiptCent } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const AdvertsCard = ({ad}) => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={`https://res.cloudinary.com/dnwoobipi/${ad.images[0]}`}
        alt="Life in mountains"
        className="w-full h-50 object-cover"
      />

      {/* Category, Location, Price Row */}
            <div className="p-2 flex justify-between items-center text-sm text-gray-500">
        {/* Category */}
        <span className="flex items-center gap-1">
          <Disc className="h-4 w-4" />
          <span className="text-gray-700 font-medium">{ad.category}</span>
        </span>

        

        {/* Price */}
        <span className="flex items-center gap-1 text-green-600 font-semibold">
          <ReceiptCent className="h-4 w-4 text-green-600" />
          {ad.price}
        </span>
      </div>

      <div className="p-2 flex flex-col flex-grow">
        <h2 className="text-md font-semibold text-gray-800 mb-2 truncate">
          {ad.productname}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 flex-grow">
       {ad.discription}
        </p>

        {/* View Details + Icons */}
        <div className="flex items-center justify-between">
          <Link
            to={`/adverts/${ad.id}`}
            className="text-blue-500 text-sm font-medium hover:underline"
          >
            View Details...
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default AdvertsCard