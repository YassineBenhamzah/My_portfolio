import axios from "axios";
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response; // Just return the response as is
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const { response } = error; // Destructure response from error object
    if (response.status === 401) {
      // Unauthorized
      localStorage.removeItem("ACCESS_TOKEN"); // Remove token from local storage
    } else if (response.status === 404) {
      //Show not found
    }

    throw error;
  },
);
export default axiosClient;
