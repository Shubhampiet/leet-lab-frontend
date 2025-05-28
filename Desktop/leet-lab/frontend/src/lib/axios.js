import axios from "axios";

const mode = import.meta.env.MODE;
export const axiosInstance = axios.create({
  baseURL: mode === "development" ? "http://localhost:8081/api/v1" : "/api/v1",
  withCredentials: true,
});
