import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./component/Header";
import { LandingPage } from "./component/LandingPage";
import { useAuth } from "./hooks/useAuth";
import { Router } from "./component/Router";
export default function App() {
  const [currentPath, setCurrentPath] = useState("/");
  const { isAuthenticated, logout } = useAuth();

  // Initialize demo user
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("ticketapp_users") || "[]");
    if (!users.find((u) => u.email === "demo@example.com")) {
      users.push({
        name: "Demo User",
        email: "demo@example.com",
        password: "demo123",
      });
      localStorage.setItem("ticketapp_users", JSON.stringify(users));
    }
  }, []);

  const handleLogout = () => {
    logout();
    setCurrentPath("/");
  };

  // Protected routes check
  useEffect(() => {
    const protectedRoutes = ["/dashboard", "/tickets"];
    if (protectedRoutes.includes(currentPath) && !isAuthenticated) {
      setCurrentPath("/auth/login");
    }
  }, [currentPath, isAuthenticated]);

  return (
    <div className="min-h-screen flex flex-col">
      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <Header
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        setCurrentPath={setCurrentPath}
      />

      <Router currentPath={currentPath} setCurrentPath={setCurrentPath} />
    </div>
  );
}