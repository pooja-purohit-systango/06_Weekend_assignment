// api_items.js
import axios from 'axios';
import { MOCK_API_BASE_URL } from '../../constants/constants';

const axios_instance = axios.create({
  baseURL:  MOCK_API_BASE_URL,
});

axios_instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accesstoken");
        console.log("localstorage token:", token);
        if (token) {
          config.headers['access-token'] = token; 
        }
        return config;
    },
    (error) => Promise.reject(error)
  );

export default axios_instance;
