import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  const login = (email) => {
    setUser(email);

    localStorage.setItem("user", email);
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
