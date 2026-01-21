import axios from "axios";

const api = "http://localhost:4000/api";

const registerUser = async (data) => {
    return await axios.post(`${api}/auth/register`,data)
}
const verifyOtp = async (email, otp) => {
    return await axios.post(`${api}/auth/verify-otp`, {email, otp})
}
const loginUser =  async (email, Password) => {
    return await axios.post(`${api}/auth/login`, {email, Password})
}
const forgotPassword = async (email) => {
    return await axios.post(`${api}/auth/forgot-password`, {email})
}
const resetPassword = async (token, newPassword) => {
    return await axios.post(`${api}/auth/reset-password`, {token, newPassword})
}
const resendOtp =  async (email) =>  {
    return await axios.post(`${api}/auth/resend-otp`, {email})
}
const getNews = async (category = 'all', token) => {
    return await axios.get(`${api}/news/${category}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}
const getCategoryStats = async (token) => {
    return await axios.get(`${api}/news/stats`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}
const getUserProfile = async (token) => {
    return await axios.get(`${api}/user/profile`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}
const updateUserProfile = async(userData, token) => {
    return await axios.put(`${api}/user/profile`, userData,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}
const uploadProfileImage = async (formData, token) => {
    return await axios.post(`${api}/user/upload-picture`, formData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }
    );
}
const deactivateUserAccount = async (Password, token) => {
    return await axios.put(`${api}/user/deactivate`, {Password},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}
const getMyFullProfile = async (token) => {
    return await axios.get(`${api}/user/profile`,
        {
            headers: {
                Authorization:`Bearer ${token}`
            }
        }
    )
}
const sendContactMessage = async (messageData) => {
    return await axios.post(`${api}/contact/send-message`, messageData)
}
export {
    registerUser,
    verifyOtp, 
    loginUser , 
    forgotPassword, 
    resetPassword, 
    resendOtp,
    getNews, 
    getCategoryStats,
    getUserProfile,
    updateUserProfile,
    uploadProfileImage,
    deactivateUserAccount,
    getMyFullProfile,
    sendContactMessage
}