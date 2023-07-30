import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userIcon, setUserIcon] = useState(null);
  const [username, setUsername] = useState(''); // Added username state

  function logout() {
    setIsLoggedIn(false);
    setUserIcon(null);
    setUsername('');
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userIcon, setUserIcon, username, setUsername, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
