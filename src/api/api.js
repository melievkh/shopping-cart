import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use((request) => {
  request.headers.common.Authorization = `Bearer ${localStorage.getItem(
    'token'
  )}`;

  return request;
});

export default api;
