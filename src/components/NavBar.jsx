import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminStore from "../store/AdminStore";

function NavBar() {
  const navigate = useNavigate();
  const { isAdmin, UserLogoutRequest } = AdminStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLogout = async () => {
    await UserLogoutRequest();
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
    setIsMenuOpen(false); // Close menu after logout
  };

  // isAdmin is a function that checks for accesstoken in cookies
  const adminStatus = isAdmin();

  return (
    <div>
      <header className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6 w-full">
        <Link to={"/"} className="flex items-center gap-2">
          <div className="h-9 w-9 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <h2 className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl max-w-2xl leading-tight">
            <span className="text-indigo-600">E-Voting</span>
          </h2>
        </Link>

        <nav
          className={`
            ${isMenuOpen ? "max-md:w-full" : "max-md:w-0"}
            max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden 
            items-center justify-center max-md:h-full transition-all duration-300
            max-md:bg-white/95 backdrop-blur-sm flex-col md:flex-row flex gap-8 
            text-gray-900 text-sm font-normal max-md:z-50
          `}
        >
          {/* Mobile Auth Button */}
          {adminStatus ? (
            <>
              <Link
                className="hover:text-indigo-600 transition-colors"
                to={"/admin/services"}
              >
                Services
              </Link>

              <button
                className="md:hidden text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors"
                onClick={onLogout}
              >
                Admin Logout
              </button>
            </>
          ) : (
            <Link
              className="md:hidden text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors"
              to={"/adminlogin"}
              onClick={toggleMenu}
            >
              Admin Login
            </Link>
          )}

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>

        {/* Desktop Auth Button */}
        <div className="hidden md:flex space-x-4">
          {adminStatus ? (
            <button
              onClick={onLogout}
              className="text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors"
            >
              Admin Logout
            </button>
          ) : (
            <Link
              className="text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors"
              to={"/adminlogin"}
            >
              Admin Login
            </Link>
          )}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
    </div>
  );
}

export default NavBar;
