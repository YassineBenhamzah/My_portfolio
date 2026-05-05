import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import logo from "../images/logo.png";

export default function Footer() {
    const { isDarkMode } = useStateContext();
    const year = new Date().getFullYear();

    const links = [
        { name: "Home", to: "/" },
        { name: "Services", to: "/services" },
        { name: "Projects", to: "/projects" },
        { name: "Skills", to: "/skills" },
        { name: "Contact", to: "/contact" },
    ];

    return (
        <footer className={`relative border-t ${
            isDarkMode ? "border-gray-800/50" : "border-gray-200"
        }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-lg shadow-green-500/20">
                                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                Yassine<span className="text-green-500">.</span>
                            </span>
                        </div>
                        <p className={`text-sm leading-relaxed max-w-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                            Full Stack Developer passionate about crafting modern web experiences with React, Laravel, and cutting-edge technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                            isDarkMode ? "text-gray-300" : "text-gray-900"
                        }`}>Quick Links</h4>
                        <ul className="space-y-2.5">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.to} className={`text-sm transition-colors duration-200 ${
                                        isDarkMode
                                            ? "text-gray-500 hover:text-green-400"
                                            : "text-gray-500 hover:text-green-600"
                                    }`}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                            isDarkMode ? "text-gray-300" : "text-gray-900"
                        }`}>Connect</h4>
                        <div className="flex gap-3">
                            <a href="https://github.com/YassineBenhamzah" target="_blank" rel="noreferrer"
                                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                                    isDarkMode
                                        ? "bg-gray-800 text-gray-400 hover:text-white border border-gray-700/50"
                                        : "bg-gray-100 text-gray-600 hover:text-gray-900 border border-gray-200"
                                }`}>
                                <FaGithub className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/yassine-benhamzah" target="_blank" rel="noreferrer"
                                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                                    isDarkMode
                                        ? "bg-gray-800 text-gray-400 hover:text-blue-400 border border-gray-700/50"
                                        : "bg-gray-100 text-gray-600 hover:text-blue-600 border border-gray-200"
                                }`}>
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                        <p className={`text-sm mt-4 ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                            yassine.benhamzah00@gmail.com
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
                    isDarkMode ? "border-gray-800/50" : "border-gray-200"
                }`}>
                    <p className={`text-xs ${isDarkMode ? "text-gray-600" : "text-gray-400"}`}>
                        © {year} Yassine Benhamzah. All rights reserved.
                    </p>
                    <p className={`text-xs flex items-center gap-1 ${isDarkMode ? "text-gray-600" : "text-gray-400"}`}>
                        Built with <FaHeart className="w-3 h-3 text-red-500" /> using React & Laravel
                    </p>
                </div>
            </div>
        </footer>
    );
}
