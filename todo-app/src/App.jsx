import React, { useEffect, useState } from "react";
import { localStorageHelper } from "@/utils/localStorageHelper";
import Navbar from "@/components/Navbar";
import TodoHero from "@/components/TodoHero";
import Register from "@/components/Register";
import Login from "@/components/Login";
import TodoDashboard from "@/components/TodoDashboard";
import "./index.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentUser, setCurrentUser] = useState(null);


  const pageGaps = {
    home: "pt-6",
    login: "pt-5",
    register: "pt-18",
    dashboard: "pt-16",
  };

 
  const pageBackgrounds = {
    home: "bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200",
    login: "bg-gray-200",
    register: "bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50",
    dashboard: "via-teal-50",
  };

  useEffect(() => {
    const user = localStorageHelper.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setCurrentPage("dashboard");
      window.history.replaceState({}, "", "#dashboard");
    } else {
      setCurrentPage("home");
      window.history.replaceState({}, "", "#home");
    }

  
    const handlePopState = () => {
      setCurrentPage("home");
      window.history.pushState({}, "", "#home");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleLoginSuccess = (username) => {
    localStorageHelper.setCurrentUser(username);
    setCurrentUser(username);
    setCurrentPage("dashboard");
    window.history.pushState({}, "", "#dashboard");
  };

  const handleLogout = () => {
    localStorageHelper.logout();
    setCurrentUser(null);
    setCurrentPage("home");
    window.history.pushState({}, "", "#home");
  };

  const handleRegisterSuccess = () => {
    setCurrentPage("login");
    window.history.pushState({}, "", "#login");
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.history.pushState({}, "", `#${page}`);
  };

  return (
    <div className="overflow-x-hidden min-h-screen">
      <Navbar
        onShowHome={() => navigateTo("home")}
        onShowLogin={() => navigateTo("login")}
        onShowRegister={() => navigateTo("register")}
        onShowDashboard={() => navigateTo("dashboard")}
        onLogout={handleLogout}
        currentUser={currentUser}
        currentPage={currentPage}
      />

      
      <div
        className={`${pageGaps[currentPage] || "pt-8"} min-h-screen ${pageBackgrounds[currentPage]}`}
      >
        {currentPage === "home" && (
          <TodoHero onGetStarted={() => navigateTo("login")} />
        )}
        {currentPage === "login" && (
          <Login
            onLoginSuccess={handleLoginSuccess}
            onShowRegister={() => navigateTo("register")}
          />
        )}
        {currentPage === "register" && (
          <Register
            onRegisterSuccess={handleRegisterSuccess}
            onShowLogin={() => navigateTo("login")}
          />
        )}
        {currentPage === "dashboard" && currentUser && (
          <TodoDashboard username={currentUser} onLogout={handleLogout} />
        )}
      </div>
    </div>
  );
}
