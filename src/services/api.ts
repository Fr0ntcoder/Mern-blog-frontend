import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const conf: AxiosRequestConfig = {
  baseURL: "http://localhost:7777",
};
const api: AxiosInstance = axios.create(conf);

api.interceptors.request.use((config: AxiosRequestConfig | any) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default api;
