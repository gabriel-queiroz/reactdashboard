import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000',
});

axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response.data) // => gives me the server resonse
  ,
);

export default http;
