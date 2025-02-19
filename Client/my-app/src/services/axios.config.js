import axios from 'axios';
const API_URL = 'http://localhost:5000/api';
export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout : 1000
});