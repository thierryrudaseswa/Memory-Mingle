// import React, { createContext, useState, useContext, ReactNode } from 'react';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   setIsAuthenticated: (value: boolean) => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('token'));

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
// contexts/AuthContext.js
// import { createContext, useContext, useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     // Check token in local storage to update authentication state
//     const token = localStorage.getItem('token');
//     setIsAuthenticated(!!token);
//   }, []);

//   const login = (token) => {
//     localStorage.setItem('token', token);
//     setIsAuthenticated(true);
//     router.push('/');
//     window.location.reload(); // Reload the page
//   };

//   const logout = async () => {
//     try {
//       await fetch('http://localhost:3000/backend/api/Logout/', { method: 'POST' });
//       localStorage.removeItem('token');
//       setIsAuthenticated(false);
//       router.push('/Login');
//       window.location.reload(); // Reload the page
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
// AuthContext.tsx
// contexts/AuthContext.tsx
import React, { createContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const login = () => {
    // Logic to handle login
    const token = 'newly_generated_token'; // Replace with actual token from the response
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    window.location.reload();
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
