import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { apiDeleteVendorById, apiGetSingleAd, apiUpdateAdverts } from '../../services/adverts';

const UpdateProduct = () => {
  const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState("");
  

  const { id } = useParams();

  const [ad, setAd] = useState({});

  const getAd = async () => {
    try {
      const response = await apiGetSingleAd(id);
      setAd(response.data);

      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAd();
  }, []);



  const handleSubmit = async (event) => {
      event.preventDefault();
  
      const data = new FormData(event.target);
      try {
        const response = await apiUpdateAdverts(data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

  
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[600px] ml-[170px] ">
        <div className="flex flex-col justify-center items-center">
          <h1> Update Product</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 pt-5">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="productName"
              placeholder="Enter Product Name"
              className="w-full border p-3 rounded"
              required
              defaultValue={ad.productName}
            />
            <input
              type="number"
              name="price"
              placeholder="Enter  Product Price"
              className="w-full border p-3 rounded"
              required
              defaultValue={ad.price}
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
              defaultValue={ad.stockQuantity}
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
            defaultValue={ad.description}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded shadow-md hover:bg-blue-700 transition"
          >
            Update Product
          </button>
        </form>
      </div>
    
    </div>
      

    

  
  )
}

export default UpdateProduct