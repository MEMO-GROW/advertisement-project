import { apiClient } from "./config";

export const apiAddAdvert = async (payload) =>
  apiClient.post("/ads", payload);

export const apiGetAllAdverts = async () =>
  apiClient.get("/ads");

export const apiGetVendorAdverts = async () =>
  apiClient.get("/ads");

export const apiUpdateAdverts = async (id, payload) =>
  apiClient.patch(`/adverts/${id}`, payload);

export const apiGetSingleAd = async (id) =>
  apiClient.get(`/ads/${id}`, );
