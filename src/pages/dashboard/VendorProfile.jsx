import React, { useState } from 'react';
import { User, Store, Edit, MapPin, Mail, Phone, Trophy, Star } from 'lucide-react';

const VendorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isStoreView, setIsStoreView] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Emma Mensah',
    businessName: 'Elegance Threads Boutique',
    bio: 'Passionate fashion designer creating unique, sustainable accessories that blend traditional Ghanaian craftsmanship with modern design.',
    email: 'emma.mensah@elegancethreads.com',
    phone: '+233 (20) 123-4567',
    location: 'Accra, Ghana',
    businessStats: {
      totalProducts: 35,
      yearsInBusiness: 5,
      customerRating: 4.8,
      totalSales: 1250
    }
  });

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    console.log('Profile updated:', profileData);
  };

  const handleViewStore = () => {
    setIsStoreView(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  if (isStoreView) {
    return (
      <div className="bg-white min-h-screen p-4 sm:p-8">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
          <div className="bg-blue-600 text-white p-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Elegance Threads Store</h1>
            <button
              onClick={() => setIsStoreView(false)}
              className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              Back to Profile
            </button>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={`/api/placeholder/300/300`}
                    alt={`Product ${item}`}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Product {item}</h3>
                    <p className="text-sm text-gray-600">Unique handcrafted accessory</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-blue-600 font-bold">$49.99</span>
                      <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="bg-white min-h-screen p-4 sm:p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-800 flex items-center">
            <Edit className="mr-3 text-blue-600" /> Edit Profile
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveProfile();
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={profileData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  rows="4"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="flex justify-end md:col-span-2 space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen p-4 sm:p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Profile Header */}
        <div className="bg-blue-600 text-white p-8">
          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <img
              src="/api/placeholder/200/200"
              alt="Vendor Profile"
              className="w-40 h-40 rounded-full border-4 border-white object-cover shadow-xl"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold">{profileData.name}</h1>
              <h2 className="text-xl text-blue-200 mt-2">{profileData.businessName}</h2>
              <p className="text-blue-100 mt-4 max-w-xl">
                {profileData.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Profile Actions */}
        <div className="p-6 bg-gray-100 flex justify-center space-x-4">
          <button
            onClick={handleEditProfile}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Edit className="mr-2" /> Edit Profile
          </button>
          <button
            onClick={handleViewStore}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Store className="mr-2" /> View Store
          </button>
        </div>

        {/* Detailed Profile Information */}
        <div className="grid md:grid-cols-2 gap-6 p-8">
          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-black flex items-center">
              <User className="mr-3 text-blue-600" /> Contact Details
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="mr-3 text-blue-500" />
                <span>{profileData.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-blue-500" />
                <span>{profileData.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 text-blue-500" />
                <span>{profileData.location}</span>
              </div>
            </div>
          </div>

          {/* Business Statistics */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-black flex items-center">
              <Trophy className="mr-3 text-blue-600" /> Business Highlights
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">{profileData.businessStats.totalProducts}</p>
                <p className="text-sm text-gray-600">Total Products</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">{profileData.businessStats.yearsInBusiness}</p>
                <p className="text-sm text-gray-600">Years in Business</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 flex items-center justify-center">
                  {profileData.businessStats.customerRating}
                  <Star className="ml-2 text-yellow-500 fill-yellow-500" />
                </p>
                <p className="text-sm text-gray-600">Customer Rating</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">${profileData.businessStats.totalSales}</p>
                <p className="text-sm text-gray-600">Total Sales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
