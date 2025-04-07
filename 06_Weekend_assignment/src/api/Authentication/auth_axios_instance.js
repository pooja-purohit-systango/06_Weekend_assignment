import { AUTHENTICATION_BASE_URL } from '../../constants/constants';
import axios from 'axios';
const auth_axios_instance = axios.create({
  baseURL: AUTHENTICATION_BASE_URL,
//   headers: {'My-name': 'pooja'}
});

auth_axios_instance.interceptors.request.use( function  (config) {
        const token = localStorage.getItem("accesstoken");
        console.log("localstorage token:", token);
        if (token) {
          config.headers['access-token'] = token; 
        }
        return config;
    }, 
    function (error) {
      Promise.reject(error)
    }
  );
  
auth_axios_instance.interceptors.response.use( function (response) {
      console.log("login successful from response interceptor.")
      console.log("acesstoken from response", response?.data?.accessToken)
      // localStorage.setItem("true", islogged)
      return response;
    },
    function (error) {
      if (error) {
        console.log('You are not authorized');
      }
      return Promise.reject(error);
    }
  );
  
  export default auth_axios_instance;
  
