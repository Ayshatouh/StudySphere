// src/api/authApi.js
import api from './client';

export const register = data => api.post('/auth/register', data);
export const login    = data => api.post('/auth/login', data);
export const logout   = ()    => api.post('/auth/logout');
