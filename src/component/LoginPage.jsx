import { useState } from "react";
import { Toast } from "./Toast";
import { Footer } from "./Footer";

// Login Page
export const LoginPage = ({ setCurrentPath }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Mock authentication
    const users = JSON.parse(localStorage.getItem("ticketapp_users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      const token = "mock_token_" + Date.now();
      localStorage.setItem("ticketapp_session", token);
      localStorage.setItem(
        "ticketapp_user",
        JSON.stringify({ email: user.email, name: user.name })
      );
      setToast({ message: "Login successful!", type: "success" });
      setTimeout(() => setCurrentPath("/dashboard"), 1000);
    } else {
      setToast({
        message: "Invalid credentials. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600">Sign in to your account</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: "" });
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({ ...errors, password: "" });
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-purple-600  text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <button
                  onClick={() => setCurrentPath("/auth/signup")}
                  className="text-purple-600 hover:text-purple-700 font-semibold"
                >
                  Sign up
                </button>
              </p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800 font-medium mb-2">
                Demo Credentials:
              </p>
              <p className="text-xs text-blue-700">Email: hng@gmail.com</p>
              <p className="text-xs text-blue-700">Password: hng123</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
