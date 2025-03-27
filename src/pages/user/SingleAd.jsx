import React, { useEffect, useState } from "react";
import SingleAdsCard from "../../components/SingleAdsCard";
import { useParams } from "react-router";
import { apiGetSingleAd } from "../../services/adverts";

const SingleAd = () => {
  const { id } = useParams;

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
    <div>
      <SingleAdsCard />
    </div>
  );
};

export default SingleAd;
