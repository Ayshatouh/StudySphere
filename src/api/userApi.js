// src/api/userApi.js
import api from './client';

export const getMe   = ()       => api.get('/users/me');
export const updateMe = payload => api.put('/users/me', payload);
export const uploadAvatar = file => {
  const form = new FormData();
  form.append('avatar', file);
  return api.post('/uploads/avatar', form);
};
