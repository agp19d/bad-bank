import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userIcon, setUserIcon] = useState(null);
  const [username, setUsername] = useState('');
  const [balance, setBalance] = useState(0); // Added balance state

  function logout() {
    setIsLoggedIn(false);
    setUserIcon(null);
    setUsername('');
    setBalance(0); // Reset the balance on logout
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
