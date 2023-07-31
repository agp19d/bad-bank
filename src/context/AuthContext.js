/**
 * @author Alejandro Garcia de Paredes
 * @created July 27, 2023
 * @modified July 31, 2023
 **/

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userIcon, setUserIcon] = useState(null);
  const [username, setUsername] = useState('');
  const [balance, setBalance] = useState(0);

  function logout() {
    setIsLoggedIn(false);
    setUserIcon(null);
    setUsername('');
    setBalance(0);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userIcon, setUserIcon, username, setUsername, balance, setBalance, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
