import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:5000/api"
    : "https://mernstack-chat-app-production.up.railway.app/api",
  withCredentials: true,
});
