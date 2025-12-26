import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mernstack-chat-app-production.up.railway.app/api",
  withCredentials: true,
});
