import { apiClient } from "./config";

export const apiAddAdvert = async (payload) =>
  apiClient.post("/ads", payload);

export const apiGetAllAdverts = async () =>
  apiClient.get("/ads");

export const apiGetVendorAdverts = async () =>
  apiClient.get("/ads");

export const apiUpdateAdverts = async (id,) =>
  apiClient.patch(`/ad/${id}`);

export const apiGetSingleAd = async (id) =>
  apiClient.get(`/ad/${id}`);

export const apiDeleteVendorById = async (id) =>
  apiClient.delete(`/ad/${id}`);
