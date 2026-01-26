import React, { useEffect, useState } from "react";
import yassine from "../images/i.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import axiosClient from "../axiosClient";
import BackMatrix from "./BackMatrix";

import { useStateContext } from "../contexts/ContextProvider";
import ThemeToggle from "../ThemeToggle";

export default function Hero() {
    const [userInformations, setUserInformation] = useState(null);
    const [error, setError] = useState(null);
    const { isDarkMode } = useStateContext();

    useEffect(() => {
        axiosClient
            .get("/informations")
            .then((response) => {
                if (response.data.data && response.data.data.length > 0) {
                    setUserInformation(response.data.data[0]);
                } else {
                    setError("No information found in database");
                }
            })
            .catch((err) => {
                setError(err.message || "Failed to fetch data");
            });
    }, []);

    if (error) {
        return (
            <section
                className={`min-h-screen flex items-center justify-center px-4 ${isDarkMode ? "text-white" : "text-gray-900"
                    }`}
            >
                <BackMatrix />
                <ThemeToggle />
                <div className="relative z-10 text-center max-w-md">
                    <div
                        className={`rounded-lg p-6 border ${isDarkMode
                                ? "bg-red-500/10 border-red-500/50"
                                : "bg-red-50 border-red-200"
                            }`}
                    >
                        <h2
                            className={`text-xl font-bold mb-2 ${isDarkMode ? "text-red-500" : "text-red-600"
                                }`}
                        >
                            Error Loading Data
                        </h2>
                        <p
                            className={`mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            {error}
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className={`px-4 py-2 rounded-full transition ${isDarkMode
                                    ? "bg-green-500 text-gray-900 hover:bg-green-400"
                                    : "bg-green-600 text-white hover:bg-green-700"
                                }`}
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    if (!userInformations) {
        return (
            <section
                className={`min-h-screen flex items-center justify-center px-4 ${isDarkMode ? "text-white" : "text-gray-900"
                    }`}
            >
                <BackMatrix />
            </section>
        );
    }

    return (
        <section
            className={`min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 py-12 relative overflow-hidden ${isDarkMode ? "text-white" : "text-gray-900"
                }`}
        >
            {/* Call the matrix background */}
            <BackMatrix />

            {/* Gradient overlay */}
            <div
                className={`absolute inset-0 z-0 ${isDarkMode
                        ? "bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50"
                        : "bg-gradient-to-b from-white/70 via-white/30 to-white/70"
                    }`}
            ></div>

            {/* Hero content */}
            <div
                className={`relative z-10 w-full flex flex-col-reverse md:flex-row items-center md:justify-between gap-8 md:gap-16 py-12 md:py-24 px-4 sm:px-6 md:px-12 shadow-none md:shadow-2xl rounded-none md:rounded-lg max-w-full md:max-w-6xl border-0 md:border ${isDarkMode
                        ? "md:bg-gray-900 md:backdrop-blur-sm md:border-green-500/10"
                        : "md:bg-white/80 md:backdrop-blur-sm md:border-gray-200"
                    }`}
            >
                {/* Left content */}
                <div className="text-center md:text-start max-w-lg">
                    <p
                        className={`text-sm mb-2 tracking-wide uppercase ${isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                    >
                        {userInformations.title || "Welcome"}
                    </p>
                    <h1
                        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-snug md:leading-tight ${isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                    >
                        Hello I'm <br />
                        <span
                            className={
                                isDarkMode ? "text-green-500" : "text-green-600"
                            }
                        >
                            {userInformations.name || "Yassine"}
                        </span>
                    </h1>
                    <p
                        className={`mb-6 leading-relaxed text-sm sm:text-base md:text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        {userInformations.description || "Full Stack Developer"}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <a
                            href="/path-to-your-cv.pdf"
                            download
                            className={`px-6 py-3 border-2 rounded-full font-medium transition ${isDarkMode
                                    ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-900"
                                    : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                                }`}
                        >
                            Download CV
                        </a>
                        {userInformations.social_links?.github && (
                            <a
                                href={userInformations.social_links.github}
                                target="_blank"
                                rel="noreferrer"
                                className="transition transform hover:scale-110"
                            >
                                <FaGithub
                                    className={`w-6 h-6 ${isDarkMode
                                            ? "text-green-400"
                                            : "text-green-600"
                                        }`}
                                />
                            </a>
                        )}
                        {userInformations.social_links?.linkedin && (
                            <a
                                href={userInformations.social_links.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="transition transform hover:scale-110"
                            >
                                <FaLinkedin
                                    className={`w-6 h-6 ${isDarkMode
                                            ? "text-green-400"
                                            : "text-green-600"
                                        }`}
                                />
                            </a>
                        )}
                    </div>
                </div>

                {/* Right content */}
                <div className="relative w-48 sm:w-56 md:w-80 h-48 sm:h-56 md:h-80 mx-auto mt-8 md:mt-0 flex-shrink-0">
                    <div
                        className={`absolute inset-0 rounded-full shadow-2xl flex items-center justify-center overflow-hidden transform transition-transform duration-500 hover:scale-105 border-2 ${isDarkMode
                                ? "bg-gray-800 border-green-500/20"
                                : "bg-gray-100 border-green-600/20"
                            }`}
                    >
                        <img
                            src={yassine}
                            alt="Yassine Benhamzah"
                            className="w-4/5 h-auto object-cover rounded-full"
                        />
                    </div>

                    {/* Floating background circles */}
                    <span
                        className={`absolute -top-3 -left-3 w-10 sm:w-14 md:w-20 h-10 sm:h-14 md:h-20 rounded-full opacity-30 animate-pulse ${isDarkMode ? "bg-green-500" : "bg-green-600"
                            }`}
                    ></span>
                    <span
                        className={`absolute -bottom-3 -right-3 w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 rounded-full opacity-20 animate-pulse ${isDarkMode ? "bg-green-500" : "bg-green-600"
                            }`}
                    ></span>
                </div>
            </div>
        </section>
    );
}
