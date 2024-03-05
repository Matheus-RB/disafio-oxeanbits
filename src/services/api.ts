import axios, { AxiosError } from "axios";
import type { AxiosResponse } from "axios";

const url = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_TOKEN;
//const key = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: url,
  timeout: 30000,
});

api.interceptors.request.use(
  (config) => {

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
/*   (error: AxiosError) => {
    if (error?.status === 401) {
      logout();
    }
    return Promise.reject(error);
  }, */
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default api;
