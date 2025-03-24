import {apiClient} from "./config"
export const apiSignup =(payload) => {
    return(
        apiClient.post("/users/register", payload)
    )
}

export const apilogin = async(payload) => apiClient.post("/users/login", payload);

export const apiVendorSignup =async(payload) => {
    return(
        apiClient.post("/users/register", payload)
    )
}

export const apiVendorlogin = async(payload) => apiClient.post("/users/login", payload);


export const apiForgotPassword = async (payload) =>
    apiClient.post("/forgot-password", payload);