import React, { createContext, useContext, useState, useEffect } from 'react';
import * as authApi from '../api/authApi';

const AuthContext = createContext();

//export const AuthProvider = ({ children }) => {
 export const AuthProvider = ({ children }) => {
  const [user,  setUser]  = useState(null);
  const [token, setToken] = useState(null);

 
  useEffect(() => {
    //this will load user and token from localstorage on app startup
    const savedUser = JSON.parse(localStorage.getItem('user'));
    const savedToken = localStorage.getItem('token');
    if (savedUser && savedToken) {
      setUser(savedUser);
      setToken(savedToken);
    }
  }, []);
    const handleLogout =()=>{
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setUser(null);
      setToken(null);
    };
  // const handleLogin = async (email, password) => {
  //   const res = await authApi.login({ email, password });
  //   localStorage.setItem('accessToken', res.data.token);
  //   setToken(res.data.token);
  //   setUser(res.data.user);
  // };

  // const handleLogout = () => {
  //   localStorage.removeItem('accessToken');
  //   setToken(null);
  //   setUser(null);
  //   authApi.logout().catch(()=>{});
  // };

  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
// Export the context itself
export { AuthContext };

// Export the provider as default
export default AuthProvider;