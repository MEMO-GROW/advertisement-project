import { PencilIcon, TrashIcon } from 'lucide-react'
import React from 'react'

const VenderAdsCard = () => {
  return (
    <div className="#">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <img
          src="#" // Replace with your own image
          alt="Xiaomi Redmi Note 12 128 GB"
          className="w-full h-50 object-cover"
        />
        <div className="p-2 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold text-blue-600 mb-2 ">
                 Xiaomi Redmi Note 12 128 GB
          </h2>
          <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
            <span>Mar 18, 2019</span>
            <span>•</span>
            <span>3 min read</span>
          </div>

          {/* discription goes here */}
          <p className="text-sm text-gray-600 mb-4 flex-grow">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </p>

          {/* Read More and Icons Inline */}
          <div className="flex items-center justify-between">
            <a   // Remember to use the link insted of the anchor in html/>/
              href="#"
              className="text-blue-500 text-sm font-medium hover:underline"
            >
              View Details...
            </a>
            <div className="flex items-center gap-3">
              <button>
                <PencilIcon className="h-5 w-5 text-green-500 hover:text-black" />
              </button>
              <button>
                <TrashIcon className="h-5 w-5 text-red-500 hover:text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VenderAdsCard