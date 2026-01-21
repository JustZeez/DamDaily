import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="bg-white shadow-lg border-b border-green-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
         
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/images/logo.png"
              alt="DamDaily"
              className="h-12 w-12 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-green-700 leading-tight">
                DamDaily
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Global News Network
              </span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {isLoggedIn ? (
              <>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/me">Me</NavLink>
                <button
                  onClick={handleLogout}
                  className="bg-red-50 text-red-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-red-100 transition-all duration-200 border border-red-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <Link
                  to="/login"
                  className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Login
                </Link>
              </>
            )}
          </div>

          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4 px-4">
              {isLoggedIn ? (
                <>
                  <MobileLink to="/news" onClick={() => setIsMenuOpen(false)}>News</MobileLink>
                  <MobileLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileLink>
                  <MobileLink to="/me" onClick={() => setIsMenuOpen(false)}>Me</MobileLink>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white font-semibold py-3 px-4 rounded-lg text-center"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <MobileLink to="/about" onClick={() => setIsMenuOpen(false)}>About Us</MobileLink>
                  <MobileLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</MobileLink>
                  <Link
                    to="/login"
                    className="bg-green-600 text-white font-semibold py-3 px-4 rounded-lg text-center mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
    </Link>
  );
}

function MobileLink({ to, onClick, children }) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-green-600 font-medium py-2 rounded-lg hover:bg-green-50 transition-all"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}