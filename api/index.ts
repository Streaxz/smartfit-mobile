import { AI_SERVICE_API_HOST } from '@env';
import axios from 'axios';

export const baseApiInstance = axios.create({
  baseURL: AI_SERVICE_API_HOST,
});

baseApiInstance.interceptors.request.use((config) => {
  // const token = undefined;
  //
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
});
