export default function Navbar({
  onShowHome,
  onShowLogin,
  onShowRegister,
  onShowDashboard,
  onLogout,
  currentUser,
  currentPage,
}) {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
    
        <div className="flex items-center gap-3">
          <span
            onClick={currentUser ? onShowDashboard : onShowHome}
            className="text-lg sm:text-xl font-semibold text-blue-600 cursor-pointer transform transition-transform duration-200 hover:scale-105"
          >
            {currentUser ? `Welcome, ${currentUser}` : "Todo App"}
          </span>
        </div>

        <ul className="flex gap-4 sm:gap-8 items-center">
          <li>
            <button
              onClick={onShowHome}
              className={`text-sm sm:text-base font-medium transition-all duration-200 ${
                currentPage === "home"
                  ? "text-blue-600 scale-105"
                  : "text-gray-700 hover:text-blue-600 hover:scale-105"
              }`}
            >
              Home
            </button>
          </li>

          {!currentUser && (
            <>
              <li>
                <button
                  onClick={onShowLogin}
                  className={`text-sm sm:text-base font-medium transition-all duration-200 ${
                    currentPage === "login"
                      ? "text-blue-600 scale-105"
                      : "text-gray-700 hover:text-blue-600 hover:scale-105"
                  }`}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={onShowRegister}
                  className={`text-sm sm:text-base font-medium transition-all duration-200 ${
                    currentPage === "register"
                      ? "text-blue-600 scale-105"
                      : "text-gray-700 hover:text-blue-600 hover:scale-105"
                  }`}
                >
                  Register
                </button>
              </li>
            </>
          )}

          {currentUser && (
            <>
              <li>
                <button
                  onClick={onShowDashboard}
                  className={`text-sm sm:text-base font-medium transition-all duration-200 ${
                    currentPage === "dashboard"
                      ? "text-blue-600 scale-105"
                      : "text-gray-700 hover:text-blue-600 hover:scale-105"
                  }`}
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={onLogout}
                  className="text-sm sm:text-base text-red-600 hover:text-red-700 font-medium transition-all duration-200 hover:scale-105"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
