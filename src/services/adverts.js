import { apiClient } from "./config";

export const apiAddAdvert = async (payload) => apiClient.post("/adverts", payload, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const apiGetAllAdverts = async () => apiClient.get("/adverts", {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const apiGetVendorAdverts = async () => apiClient.get("/vendor-adverts", {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const apiUpdateAdverts = async (id, payload) => apiClient.patch(`/adverts/${id}`, payload, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

export const apiGetSingleAd = async (id) => apiClient.get(`/adverts/${id}`, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})