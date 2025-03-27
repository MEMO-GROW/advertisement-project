import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { apiGetSingleAd } from "../../services/adverts";
import { HeartCrack } from "lucide-react";

const SingleAd = () => {
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
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Product Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          {/* Product Name BEFORE Image */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4"></h1>
          {ad.images?.length && (
            <img
              src={`https://res.cloudinary.com/dnwoobipi/${ad.images[0]}`}
              alt={ad.productName}
              className="w-full h-90 object-cover rounded-xl mb-6"
            />
          )}

          {/* Description Section */}
          <div className="space-y-4">
            <h2 className="text-base font-bold  text-gray-800">Description:</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {ad.description}
            </p>
          </div>
        </div>

        {/* Right: Price and Contact Section */}
        <div className="space-y-6">
          {/* Price Section with span */}
          <div className="bg-green-500 text-white flex items-center justify-center py-3 rounded-2xl text-lg font-semibold">
            <span className="inline-flex items-center gap-1">
              <span>
                {/* change this  */}
                <HeartCrack />
              </span>
              <span>{ad.price}</span>
            </span>
          </div>

          {/* Ad Owner with Contact Information */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="font-bold  text-gray-700 mb-2 text-[1rem] ">
              Contact informationjjj
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Name:</span> John
                Doe
              </p>
              <p>
                <span className="font-semibold text-gray-900">Phone:</span> +1
                (987) 785-3190
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="font-bold  text-gray-700 mb-4">Contact Ad Owner</h3>
            <form className="space-y-3 text-sm">
              <div>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Your email for replies"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <textarea
                  rows="3"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Ask us anything"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 hover:bg-red-900 text-white py-2 rounded-xl"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAd;
