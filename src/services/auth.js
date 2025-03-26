import {apiClient} from "./config"
export const apiSignup =(payload) => {
    return(
        apiClient.post("/user/register", payload,{
            headers: {
                "Content-Type": 'application/json'
            }
        })
    )
}

export const apiLogin = async(payload) => apiClient.post("/user/login", payload, {
    headers:{
        "Content-Type": 'application/json'
    }
});

export const apiVendorSignup =(payload) => {
    return(
        apiClient.post("/user/register", payload, {
            headers: {
                "Content-Type": 'application/json'
            }
        })
    )
}

export const apiVendorlogin = async(payload) => apiClient.post("/user/login", payload);


export const apiForgotPassword = async (payload) =>
    apiClient.post("/forgot-password", payload);