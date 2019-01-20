import axios from 'axios'
import { BASE_URL } from '@/config/url';

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default service;
