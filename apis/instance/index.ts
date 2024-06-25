import axios from 'axios';

const baseURL = process.env.API_URL;
console.log('baseURL : ', baseURL);

// 기본 axios instance
export const defaultInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const AuthInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});
