import axios from "axios";

const api = axios.create({
   baseURL: "https://api.github.com",
   headers: {'Accept': 'application/vnd.github.v3+json'}
});

api.interceptors.request.use( async (res) => {
   await console.log(res);
   return res;
});

export default api;