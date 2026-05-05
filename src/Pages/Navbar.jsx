import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Projects", to: "/projects" },
    { name: "Skills", to: "/skills" },
    { name: "Contact", to: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className={`w-full max-w-6xl mx-auto mt-0 md:mt-4 px-4 sm:px-6 transition-all duration-500 ${
        scrolled ? '' : ''
      }`}>
        <div className={`rounded-none md:rounded-2xl px-5 py-3.5 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? isDarkMode
              ? 'bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-black/20 border border-gray-800/50'
              : 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border border-gray-200/50'
            : isDarkMode
              ? 'bg-gray-950/50 backdrop-blur-md border border-transparent md:border-gray-800/30'
              : 'bg-white/50 backdrop-blur-md border border-transparent md:border-gray-200/30'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50 relative group">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-lg shadow-green-500/10 group-hover:shadow-green-500/30 transition-all duration-300 group-hover:scale-105">
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className={`text-lg font-bold tracking-tight hidden sm:block ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Yassine<span className="text-green-500">.</span>
            </span>
          </Link>

          {/* Desktop Links & Theme Toggle */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(link.to)
                    ? isDarkMode
                      ? 'bg-green-500/15 text-green-400 shadow-inner'
                      : 'bg-green-50 text-green-700'
                    : isDarkMode
                      ? 'text-gray-400 hover:text-white hover:bg-white/5'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`ml-2 p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400 border border-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2.5 z-50 relative">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-800 text-yellow-400 border border-gray-700'
                  : 'bg-gray-100 text-gray-700 border border-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun className="w-3.5 h-3.5" /> : <FaMoon className="w-3.5 h-3.5" />}
            </button>

            <button
              className="flex flex-col gap-[5px] p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${
                isDarkMode ? 'bg-white' : 'bg-gray-900'
              } ${open ? "rotate-45 translate-y-[7px]" : ""}`}></span>
              <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${
                isDarkMode ? 'bg-white' : 'bg-gray-900'
              } ${open ? "opacity-0 scale-0" : ""}`}></span>
              <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${
                isDarkMode ? 'bg-white' : 'bg-gray-900'
              } ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300 overflow-hidden ${
        open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
      }`}>
        <div className={`rounded-2xl p-4 ${
          isDarkMode 
            ? 'bg-gray-950/95 backdrop-blur-xl border border-gray-800/50' 
            : 'bg-white/95 backdrop-blur-xl border border-gray-200/50'
        }`}>
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(link.to)
                      ? isDarkMode
                        ? 'bg-green-500/15 text-green-400'
                        : 'bg-green-50 text-green-700'
                      : isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-white/5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}