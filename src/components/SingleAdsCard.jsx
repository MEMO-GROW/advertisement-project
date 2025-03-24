import { HeartCrackIcon } from "lucide-react";
import React from "react";

const SingleAdsCard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Product Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          {/* Product Name BEFORE Image */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            iPhone 14 Pro Max
          </h1>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Product"
            className="w-full h-90 object-cover rounded-xl mb-6"
          />

          {/* Description Section */}
          <div className="space-y-4">
            <h2 className="text-base font-bold  text-gray-800">Description:</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              ClassiAds includes 20+ category templates, making it great for
              those hoping to create specific classified sites. As an admin,
              simply approve seller applications, and they can manage their ads
              in a front-end panel. The default listing type is free, but you
              can elect to charge users to feature their ads in high-traffic
              site areas for increased engagement and visibility.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              ClassiAds can also integrate with MailChimp, enabling
              communication between admin and sellers and buyers and sellers.
              You can make additional customizations with Elementor.
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
                <HeartCrackIcon />
              </span>
              <span>299</span>
            </span>
          </div>

          {/* Ad Owner with Contact Information */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="font-bold  text-gray-700 mb-2 text-[1rem] ">
              Contact information
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

export default SingleAdsCard;
