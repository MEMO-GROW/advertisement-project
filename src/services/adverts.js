import { apiClient } from "./config";

export const apiAddAdvert = async (payload) => apiClient.post("/ads", payload, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const apiGetAllAdverts = async () => apiClient.get("/ads", {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const apiGetVendorAdverts = async () => apiClient.get("/ads", {
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