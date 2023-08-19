import axios from 'axios';

const API = axios.create({
  baseURL: 'https://64db59c4593f57e435b0d19c.mockapi.io/api/allJobs/'
  // timeout: 10000
});

const requestHandler = (request) => {
  return request;
};

const responseHandler = (response) => {
  return response.data;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

API.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

API.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default API;
