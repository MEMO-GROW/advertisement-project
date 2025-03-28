import React, { useState } from "react";
import { apiAddAdvert } from "../../services/adverts";
import { useNavigate } from "react-router";



const CreateAd = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    try {
      const response = await apiAddAdvert(data);
      console.log(response);

      setSuccessMessage("Product added successfully!"); // Set success message
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
      navigate('/dashboard/ads');
    }, 2000);
    


    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[600px] ml-[170px] ">

        {/* ✅ SUCCESS MESSAGE (Appears after adding product) */}
      {successMessage && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
          {successMessage}
        </div>
      )}



        <div className="flex flex-col justify-center items-center">
          <h1> Add New Product</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 pt-5">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="productName"
              placeholder="Enter Product Name"
              className="w-full border p-3 rounded"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Enter  Product Price"
              className="w-full border p-3 rounded"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="file"
              name="images"
              placeholder="#"
              className="w-full border p-3 rounded"
              required
            />
            <select
              name="category"
              className="w-full border p-3 rounded"
              required
            >
              <option value="">Select Category</option>
              <option value="clothing">Clothing</option>
              <option value="footWear">FootWear</option>
              <option value="bags and Wallet">Bags and Wallet</option>
              <option value="jewelry and Watches">Jewelry and Watches</option>
              <option value="accessories">Accessories</option>
              <option value="cosmetics">Cosmetics</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="stockQuantity"
              placeholder=" Enter Stock Quantity"
              className="w-full border p-3 rounded"
              required
            />
            <input
              type="text"
              name="vendor"
              placeholder="Enter your Name"
              className="w-full border p-3 rounded"
              required
            />
          </div>
          <textarea
            name="description"
            placeholder="Enter Product Discription"
            className="w-full border p-3 rounded"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded shadow-md hover:bg-blue-700 transition"
          >
            Add New Product
          </button>
        </form>
      </div>
      {/* {forms section starts} */}
    </div>
  );
};

export default CreateAd;
