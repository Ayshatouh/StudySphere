import React, { createContext, useContext, useState, useEffect } from 'react';
import * as authApi from '../api/authApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user,  setUser]  = useState(null);
  const [token, setToken] = useState(localStorage.getItem('accessToken'));

  // Auto-load profile if token exists
  useEffect(() => {
    if (!token) return;
    authApi.login({}) // or userApi.getMe(); depending on your backend
      .then(res => setUser(res.data.user))
      .catch(() => handleLogout());
  }, [token]);

  const handleLogin = async (email, password) => {
    const res = await authApi.login({ email, password });
    localStorage.setItem('accessToken', res.data.token);
    setToken(res.data.token);
    setUser(res.data.user);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setToken(null);
    setUser(null);
    authApi.logout().catch(()=>{});
  };

  return (
    <AuthContext.Provider value={{ user, token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
