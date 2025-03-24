import { Disc, MapIcon, MapPinIcon, ReceiptCent } from 'lucide-react'
import React from 'react'

const AdvertsCard = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Life in mountains"
        className="w-full h-50 object-cover"
      />

      {/* Category, Location, Price Row */}
            <div className="p-2 flex justify-between items-center text-sm text-gray-500">
        {/* Category */}
        <span className="flex items-center gap-1">
          <Disc className="h-4 w-4" />
          <span className="text-gray-700 font-medium">Jobs</span>
        </span>

        {/* Location */}
        <span className="flex items-center gap-1">
          <MapPinIcon className="h-4 w-4 text-gray-700" />
          <span className="text-gray-700 font-medium">London</span>
        </span>

        {/* Price */}
        <span className="flex items-center gap-1 text-green-600 font-semibold">
          <ReceiptCent className="h-4 w-4 text-green-600" />
          500
        </span>
      </div>

      <div className="p-2 flex flex-col flex-grow">
        <h2 className="text-md font-semibold text-gray-800 mb-2 truncate">
          Trained Ballet Dancer Is Ready for Hire
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonumy eirmod tempor.
        </p>

        {/* View Details + Icons */}
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-blue-500 text-sm font-medium hover:underline"
          >
            View Details...
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default AdvertsCard