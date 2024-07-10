import axios from "axios";

const apiClient = axios.create({
  baseURL: " https://back-bankafee.vercel.app/bankafee/v1",
  timeout: 5000,
});

apiClient.interceptors.request.use(
  (config) => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      const token = JSON.parse(getToken); 
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (e)=>{
    return Promise.reject(e);
  }
);

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login/", data);
  } catch (e) {
    return {
      error: true,
      e
    }
  }
}

export const getProduct = async () => {
  try {
    return await apiClient.get("/productHomePage");
  } catch (e) {
    return {
      error: true,
      e
    }
  }
}