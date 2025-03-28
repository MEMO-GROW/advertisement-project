import { apiClient } from "./config";

export const apiAddAdvert = async (payload) => apiClient.post("/ads", payload);

export const apiGetAllAdverts = async (filter = {}) =>
  apiClient.get(`/ads?filter=${JSON.stringify(filter)}`);

export const apiGetVendorAdverts = async () => apiClient.get("/ad");

export const apiUpdateAdverts = async (id, payload) =>
  apiClient.patch(`/ad/${id}`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const apiGetSingleAd = async (id) => apiClient.get(`/ad/${id}`);

export const apiDeleteVendorById = async (id) => apiClient.delete(`/ad/${id}`);
