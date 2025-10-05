import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { localStorageHelper } from "@/utils/localStorageHelper";
import ValidationItem from "./ValidationItem";

export default function Register({ onRegisterSuccess, onShowLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validations, setValidations] = useState({
    minLength: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpecial: false,
  });

  useEffect(() => {
    const p = formData.password;
    setValidations({
      minLength: p.length >= 8,
      hasUpper: /[A-Z]/.test(p),
      hasLower: /[a-z]/.test(p),
      hasNumber: /\d/.test(p),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(p),
    });
  }, [formData.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.username.length < 3) {
      setError("Username must be at least 3 characters!");
      return;
    }

    if (
      !validations.minLength ||
      !validations.hasUpper ||
      !validations.hasLower ||
      !validations.hasNumber ||
      !validations.hasSpecial
    ) {
      setError("Password does not meet the required criteria!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (localStorageHelper.getUser(formData.username)) {
      setError("Username already exists!");
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    localStorageHelper.saveUser({
      username: formData.username,
      password: formData.password,
    });

    alert("Registration successful! Please login.");
    onRegisterSuccess();
    setIsLoading(false);
  };

  const isFormValid =
    validations.minLength &&
    validations.hasUpper &&
    validations.hasLower &&
    validations.hasNumber &&
    validations.hasSpecial &&
    formData.password === formData.confirmPassword &&
    formData.username.length >= 3;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 flex justify-center p-4 pt-4">
  <div className="flex flex-col items-center w-full">
    <form
      onSubmit={handleSubmit}
      className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl w-full max-w-md p-6 space-y-4 border border-gray-100 animate-fadeIn"
      style={{ marginBottom: "2rem" }} 
    >
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
        Register Here
      </h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      {/* Username */}
      <div className="relative">
        <User className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent bg-gray-50"
        />
      </div>

      <div className="relative">
        <Lock className="absolute left-3 top-3 text-gray-400" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent bg-gray-50"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-400"
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      </div>

      <div className="relative">
        <Lock className="absolute left-3 top-3 text-gray-400" />
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent bg-gray-50"
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-3 text-gray-400"
        >
          {showConfirmPassword ? <EyeOff /> : <Eye />}
        </button>
      </div>

      <div className="space-y-1">
        <ValidationItem met={validations.minLength} text="At least 8 characters" />
        <ValidationItem met={validations.hasUpper} text="One uppercase letter" />
        <ValidationItem met={validations.hasLower} text="One lowercase letter" />
        <ValidationItem met={validations.hasNumber} text="One number" />
        <ValidationItem met={validations.hasSpecial} text="One special character" />
      </div>

      {/* Register Button */}
      <button
        type="submit"
        disabled={isLoading || !isFormValid}
        className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Registering..." : "Register"}
      </button>

      <p className="text-sm text-center text-gray-600">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onShowLogin}
          className="text-teal-500 hover:text-teal-600 font-medium transition"
        >
          Login
        </button>
      </p>
    </form>
  </div>
</div>
  );
}