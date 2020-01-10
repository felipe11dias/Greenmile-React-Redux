import axios from "axios";

const api = axios.create({
   baseURL: "https://api.github.com",
   headers: {
      'Accept': 'application/vnd.github.v3+json',
   }
});

// Intecepta a requisição mostrando como a requisição chega.
api.interceptors.request.use( async req => {
   //await console.log(req);
   return req;
});

api.interceptors.response.use( async res => {
   await console.log(res);
   return res;
}, error => {
   return Promise.reject(error);
});

export default api;