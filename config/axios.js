import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://cm.ais-aif.my.id/api/',
    timeout: 2000,
    headers: {
        "Content-Type": "application/json"
    }
}); 

// axiosInstance.interceptors.request.use(
//     (config) => {
//         let token = localStorage.getItem('token') || null
//         return {
//             ...config,
//             headers: {
//                 ...config.headers,
//                 Authorization: `${token}`,
//             },
//         };
//     },
//     (error) => {
//         Promise.reject(error);
//     }
// )

export default axiosInstance