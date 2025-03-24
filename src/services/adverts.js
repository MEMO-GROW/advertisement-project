import {apiClient} from "./config";

export const apiAddAdvert = async(payload) => apiClient.post("/adverts", payload);

export const apiGetAllAdverts = async() => apiClient.get("/adverts");

export const apiGetVendorAdverts = async() => apiClient.get("/vendor-adverts");

export const apiUpdateAdverts = async(id, payload) => apiClient.patch(`/adverts/${id}`, payload)

export const apiGetSingleAd = async(id) => apiClient.get(`/adverts/${id}`)