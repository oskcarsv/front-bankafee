import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3000/bankafee/v1",
    timeout: 5000,
});

