import axios from 'axios';
import { BASE_API_URL } from '../app/constants/routes';

const API = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;