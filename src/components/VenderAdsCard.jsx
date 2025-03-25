import { Disc, MapPin, PencilIcon, Receipt, TrashIcon, X } from 'lucide-react'
import React, { useState } from 'react'

const VenderAdsCard = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = () => {
    setShowEditModal(false);
    console.log("Edit Confirm");
  };

  const handleDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Life in mountains"
        className="w-full h-50 object-cover"
      />

      {/* Category, Location, Price Row */}
      {/* Category, Location, Price Row */}
      <div className="p-2 flex justify-between items-center text-sm text-gray-500">
        {/* Category */}
        <span className="flex items-center gap-1">
          <Disc className="h-4 w-4" />
          <span className="text-gray-700 font-medium">Jobs</span>
        </span>

        {/* Location */}
        <span className="flex items-center gap-1">
          <MapPin className="h-4 w-4 text-gray-700" />
          <span className="text-gray-700 font-medium">London</span>
        </span>

        {/* Price */}
        <span className="flex items-center gap-1 text-green-600 font-semibold">
          <Receipt className="h-4 w-4 text-green-600" />
          ₵500
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
          <div className="flex items-center gap-3">
            <button onClick={() => setShowEditModal(true)}>
              <PencilIcon className="h-5 w-5 text-green-500 hover:text-black" />
            </button>
            <button onClick={() => setShowDeleteModal(true)}>
              <TrashIcon className="h-5 w-5 text-red-500 hover:text-red-600" />
            </button>
          </div>
        </div>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Edit Article</h3>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {showEditModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-md ">
                  {/* Modal Header */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Edit Product</h3>
                    <button
                      onClick={() => setShowEditModal(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      defaultValue="Trained Ballet Dancer Is Ready for Hire"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  {/* Price */}
                  <div className="mb-4 ">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price (₵)
                    </label>
                    <input
                      type="number"
                      defaultValue="500"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Image Upload */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Category */}
                  <div className="mb-4 ">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      defaultValue="Jobs"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Location */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      defaultValue="London"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    {/* <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label> */}
                    <textarea
                      defaultValue="Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor."
                      className="w-full p-2 border border-gray-300 rounded-md h-32"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end space-x-2 mt-6">
                    <button
                      onClick={() => setShowEditModal(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleEdit}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  defaultValue="Life in mountains"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  defaultValue="Nature"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <textarea
                  defaultValue="Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua..."
                  className="w-full p-2 border border-gray-300 rounded-md h-32"
                />
              </div>
            </form> */}
            <div className="flex justify-end space-x-2 mt-6">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleEdit}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Delete Article</h3>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "Life in mountains"? This action
              cannot be undone.
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VenderAdsCard