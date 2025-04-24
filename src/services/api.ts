import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pji110.mateusrodcosta.dev:3000', // Altere para o backend real quando necessário
});

// Interceptor para adicionar token JWT automaticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
