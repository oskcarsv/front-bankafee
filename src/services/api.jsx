import axios from "axios";

const apiClient = axios.create({
  //baseURL: " https://back-bankafee-phi.vercel.app/bankafee/v1",
  baseURL: "http://localhost:3004/bankafee/v1",
  timeout: 5000,
});

apiClient.interceptors.request.use(
  (config) => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      const token = JSON.parse(getToken).token;
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (e) => {
    return Promise.reject(e);
  },
);

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login/", data);
  } catch (e) {
    return {
      error: true,
      e,
    };
  }
};

export const clientPetition = async (data) => {
  try {
    return await apiClient.post("/auth/clientPetition", data);
  } catch (e) {
    return {
      error: true,
      e,
    };
  }
};

export const getCategoryProduct = async () => {
  try {
    return await apiClient.get("/categoryProduct");
  } catch (e) {
    return {
      error: true,
      e,
    };
  }
};

export const getProductForCategory = async (id) => {
  try {
    return await apiClient.get(`/categoryProduct/${id}`);
  } catch (e) {
    return {
      error: true,
      e,
    };
  }
};

export const getProduct = async (id) => {
  try {
    return await apiClient.get(`/searchProduct/${id}`);
  } catch (e) {
    return {
      error: true,
      e,
    };
  }
};

export const getOwnAccount = async () => {
  try {
    return await apiClient.get("/account/user");
  } catch (e) {
    return {
      error: true,
      e,
    };
  }
};
