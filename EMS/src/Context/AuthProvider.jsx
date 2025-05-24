import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: null, admin: null });

  useEffect(() => {
    // localStorage.clear()
    setLocalStorage()
    const { employees } = getLocalStorage();
    setUserData({ employees });
  }, []);

  return (
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
