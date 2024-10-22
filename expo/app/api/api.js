import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.39.6.219:8000/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (email, password) => {
    try {
        const response = await api.post('/user/login', { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default api;