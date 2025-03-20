import React from 'react'

const CreateAd = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[600px] ml-[170px] ">
        <div className="flex flex-col justify-center items-center">
          <h1> Add to New Product</h1>
        </div>
      <form className="space-y-4 pt-5">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="#"
            placeholder="Enter Product titleTitle"
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="text"
            name="#"
            placeholder="Enter Price"
            className="w-full border p-3 rounded"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
            <input
              type="file"
              name="#"
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
              <option value="#">lol</option>
              <option value="#">lol</option>
              <option value="#">lol</option>
              <option value="#">lol</option>
              <option value="#">lol</option>
              <option value="#">lol</option>
            </select>
          </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="#"
            placeholder="Enter Your Location"
            className="w-full border p-3 shadow-sm rounded"
            required
          />
          <select name="Region" className="w-full border p-3 rounded" required>
            <option value="">Select Region</option>
            <option value="Ahafo">Ahafo</option>
            <option value="Ashanti">Ashanti</option>
            <option value="Bono">Bono</option>
            <option value="Bono East">Bono East</option>
            <option value="Central">Central</option>
            <option value="Eastern">Eastern</option>
            <option value="Greater Accra">Greater Accra</option>
            <option value="North East">North East</option>
            <option value="Northern">Northern</option>
            <option value="Oti">Oti</option>
            <option value="Savannah">Savannah</option>
            <option value="Upper East">Upper East</option>
            <option value="Upper West">Upper West</option>
            <option value="Volta">Volta</option>
            <option value="Western">Western</option>
            <option value="Western North">Western North</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          
          <input
            type="text"
            name="#"
            placeholder="Enter Your Name"
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="number"
            name="#"
            placeholder="Enter your Phone Number"
            className="w-full border p-3 rounded"
            required
          />
        </div>
        <textarea
            name="#"
            placeholder="Enter Product Discription"
            className="w-full border p-3 rounded"
            required
          ></textarea>


        <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded shadow-md hover:bg-blue-700 transition"
          >
            Add to New Product
          </button>
      </form>

      </div>
      {/* {forms section starts} */}

      
      {/* {forms section ends} */}
    </div>
    
  )
}

export default CreateAd