import { useEffect, useState } from "react";

export const useAuth = (currentPath) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    setIsAuthenticated(!!session);
  }, [currentPath]);

  const login = (token) => {
    localStorage.setItem("ticketapp_session", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};
