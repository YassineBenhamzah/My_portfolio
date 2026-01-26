import React from 'react';
import { useStateContext } from './contexts/ContextProvider'
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useStateContext();

    return (
        <button
            onClick={toggleTheme}
            className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
                isDarkMode
                    ? 'bg-gray-800/80 hover:bg-gray-700/80 text-yellow-400'
                    : 'bg-white/80 hover:bg-gray-100/80 text-gray-800'
            } backdrop-blur-sm border-2 ${
                isDarkMode ? 'border-green-500/30' : 'border-gray-300'
            } shadow-lg hover:scale-110`}
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <FaSun className="w-5 h-5 animate-spin-slow" />
            ) : (
                <FaMoon className="w-5 h-6" />
            )}
        </button>
    );
}