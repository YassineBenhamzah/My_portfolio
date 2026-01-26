import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useStateContext();
  const location = useLocation();

  const links = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Projects", to: "/projects" },
    { name: "Skills", to: "/skills" },
    { name: "Contact", to: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 md:top-5 w-full z-50">
      <div className={`w-full max-w-6xl mx-auto backdrop-blur-md shadow-2xl md:rounded-lg px-6 py-4 flex items-center justify-between transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900/90 border border-gray-800' 
          : 'bg-white/90 border border-gray-200'
      }`}>
        {/* Logo */}
        <h1 className={`text-2xl font-bold tracking-tight z-50 relative ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Yassine<span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>Dev</span>
        </h1>

        {/* Desktop Links & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive(link.to)
                  ? isDarkMode
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-green-100 text-green-700'
                  : isDarkMode
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Theme Toggle Button - Desktop */}
          <button
            onClick={toggleTheme}
            className={`ml-2 p-2.5 rounded-full transition-all duration-300 ${
              isDarkMode
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            } border-2 ${
              isDarkMode ? 'border-green-500/30' : 'border-gray-300'
            } shadow-lg hover:scale-110`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FaSun className="w-4 h-4" />
            ) : (
              <FaMoon className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Mobile: Theme Toggle & Hamburger */}
        <div className="flex md:hidden items-center gap-3 z-50 relative">
          {/* Theme Toggle Button - Mobile */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDarkMode
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            } border-2 ${
              isDarkMode ? 'border-green-500/30' : 'border-gray-300'
            } shadow-lg hover:scale-110`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FaSun className="w-3.5 h-3.5" />
            ) : (
              <FaMoon className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="flex flex-col space-y-1"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isDarkMode ? 'bg-white' : 'bg-black'
              } ${open ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-opacity duration-300 ${
                isDarkMode ? 'bg-white' : 'bg-black'
              } ${open ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isDarkMode ? 'bg-white' : 'bg-black'
              } ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden shadow-md rounded-b-lg max-w-6xl mx-auto mt-1 overflow-hidden transition-all duration-300 ${
          isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
        } ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.to)
                    ? isDarkMode
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-green-100 text-green-700'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}