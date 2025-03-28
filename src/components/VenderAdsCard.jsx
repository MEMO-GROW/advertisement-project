import { Disc, MapPin, PencilIcon, Receipt, TrashIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import { apiDeleteVendorById } from "../services/adverts";

const VenderAdsCard = ({ ad }) => {
  const handleDelete  = async()=>{
    try {
      const response = await  apiDeleteVendorById(ad.id)
      console.log(response.data)
      window.location.reload()
      
    } catch (error) {
      console.log(error);
      
      
    }
  }
 

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={`https://res.cloudinary.com/dnwoobipi/${ad.images[0]}`}
        alt={"Product Image"}
        className="w-full h-48 object-contain rounded-t-lg"
      />

      {/* Category, Location, Price Row */}
      <div className="p-2 flex justify-between items-center text-sm text-gray-500">
        {/* Category */}
        <span className="flex items-center gap-1">
          <Disc className="h-4 w-4" />
          <span className="text-gray-700 font-medium">{ad.category}</span>
        </span>

        {/* Price */}
        <span className="flex items-center gap-1 text-green-600 font-bold text-2xl">
          <h1>GHS</h1>
          {ad.price}
        </span>
      </div>

      <div className="p-2 flex flex-col flex-grow">
        <h2 className="text-md font-semibold text-gray-800 mb-2 truncate">
          {ad.productName}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 flex-grow">{ad.description}</p>

        {/* View Details + Icons */}
        <div className="flex items-center justify-between">
  {/* Wrap the icons in a flexbox and move them to the right */}
  <div className="flex items-center gap-3 ml-auto">
    <Link to={`/dashboard/edit/${ad.id}`}>
      <button>
        <PencilIcon className="h-5 w-5 text-green-500 hover:text-black" />
      </button>
    </Link>

    <button onClick={handleDelete}>
      <TrashIcon className="h-5 w-5 text-red-500 hover:text-red-600" />
    </button>
  </div>
</div>
      </div>

      
    </div>
  );
};

export default VenderAdsCard;
