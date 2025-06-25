// src/pages/AdminLogin.jsx
import { PlaneTakeoff } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("rememberEmail") || "");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(!!localStorage.getItem("rememberEmail"));
  const [error, setError] = useState("");
  const [showForgotModal, setShowForgotModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure localStorage update is synced after logout
    if (!localStorage.getItem("isAdmin")) {
      setEmail(localStorage.getItem("rememberEmail") || "");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const adminEmail = "admin@skyjourney.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      const currentName = localStorage.getItem("adminName");
      const currentTime = localStorage.getItem("lastLogin");

      if (currentName && currentName !== name) {
        localStorage.setItem("prevAdminName", currentName);
        localStorage.setItem("prevLoginTime", currentTime);
      }

      localStorage.setItem("adminName", name);
      localStorage.setItem("lastLogin", new Date().toLocaleString());
      localStorage.setItem("isAdmin", true);

      if (remember) {
        localStorage.setItem("rememberEmail", email);
      } else {
        localStorage.removeItem("rememberEmail");
      }

      // Reload to ensure all hooks and protected routes recognize state
      window.location.href = "/dashboard";
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-8">
        <div className="ml-2 text-xl font-bold text-gray-800 flex items-center gap-2 justify-center pb-8">
          Sky <PlaneTakeoff className="text-blue-600" /> Journey
        </div>

        {error && <div className="text-red-600 text-sm text-center mb-4">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Admin Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@skyjourney.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
            <input
              type="password"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="admin123"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>
            <button
              type="button"
              onClick={() => setShowForgotModal(true)}
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>

      {showForgotModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">Forgot Password</h3>
            <p className="text-sm text-gray-600 mb-4">
              Please contact your system administrator to reset your password.
            </p>
            <button
              onClick={() => setShowForgotModal(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
