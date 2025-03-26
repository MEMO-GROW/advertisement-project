import React, { useEffect, useState } from "react";
import VenderAdsCard from "../../components/VenderAdsCard";
import { apiGetVendorAdverts } from "../../services/adverts";

const VendorAds = () => {
  const [ads, setAds] = useState([]);
  //featching data from api//
  const getAds = async () => {
    try {
      const response = await apiGetVendorAdverts();
      setAds(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAds();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center ">
        <h1 className="text-4xl font-extrabold mb-3">Ads Added</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 justify-center">
        {ads.map((ad) => {
          return <VenderAdsCard key={ad.id} ad={ad} />;
        })}
      </div>
    </div>
  );
};

export default VendorAds;
