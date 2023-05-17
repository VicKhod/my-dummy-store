import axios from 'axios';

export const config = {
  baseURL: `https://dummyjson.com`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const API = axios.create(config);