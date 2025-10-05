import React, { useState } from "react";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { localStorageHelper } from "@/utils/localStorageHelper";

export default function Login({ onLoginSuccess, onShowRegister }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.username || !formData.password) {
      setError("Username and password are required!");
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    const user = localStorageHelper.getUser(formData.username);
    if (!user || user.password !== formData.password) {
      setError("Invalid username or password!");
      setIsLoading(false);
      return;
    }

    localStorageHelper.setCurrentUser(formData.username);
    onLoginSuccess(formData.username);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 p-4 pt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl w-full max-w-md p-8 space-y-6 animate-fadeIn border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
          Welcome Back 
        </h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

   
        <div className="relative group">
          <User className="absolute left-3 top-3 text-gray-400 group-focus-within:text-teal-400 transition" />
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition bg-gray-50"
          />
        </div>

      
        <div className="relative group">
          <Lock className="absolute left-3 top-3 text-gray-400 group-focus-within:text-teal-400 transition" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition bg-gray-50"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-400 hover:text-teal-400 transition"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onShowRegister}
            className="text-teal-500 hover:text-teal-600 font-medium transition"
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
}


