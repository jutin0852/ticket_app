import { LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = ({ isAuthenticated, onLogout, setCurrentPath }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPath("/")}
          >
            <span className="text-2xl font-bold bg-purple-600 bg-clip-text text-transparent">
              TicketFlow
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {isAuthenticated && (
              <>
                <button
                  onClick={() => setCurrentPath("/dashboard")}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setCurrentPath("/tickets")}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Tickets
                </button>
              </>
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              >
                <LogOut size={18} />
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => setCurrentPath("/auth/login")}
                  className="px-4 py-2 text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => setCurrentPath("/auth/signup")}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg "
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => {
                      setCurrentPath("/dashboard");
                      setMobileMenuOpen(false);
                    }}
                    className="text-left text-gray-700"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPath("/tickets");
                      setMobileMenuOpen(false);
                    }}
                    className="text-left text-gray-700"
                  >
                    Tickets
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setCurrentPath("/auth/login");
                      setMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPath("/auth/signup");
                      setMobileMenuOpen(false);
                    }}
                    className="px-6 py-2 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-lg"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
