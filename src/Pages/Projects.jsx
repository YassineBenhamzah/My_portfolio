import React, { useState } from "react";
import BackMatrix from "./BackMatrix";
import elearning from "../images/elearning.png";
import portfolio from "../images/portfolio.png";
import agence from "../images/agence.png";
import newportf from "../images/newportf.png";
import restaurant from "../images/restaurant.png";
import kanflowImg from "../images/kanflow.png";
import retacarImg from "../images/retacar.png";
import binwithbrainImg from "../images/binwithbrain.jpg";
import { useStateContext } from "../contexts/ContextProvider";

export default function Projects() {
    const [selectedCard, setSelectedCard] = useState(null);
    const { isDarkMode } = useStateContext();

    const projects = [
        {
            id: 1,
            title: "Old Portfolio",
            icon: "💼",
            image: portfolio,
            // color: "from-purple-500 to-pink-500",
            description:
                "My personal portfolio developed with nextjs and tailwindcss It brings together my experiences, completed projects, skills and a contact form.",
            tech: ["Next", "MySql", "Tailwindcss"],
            details:
                "This project handles over 10,000 daily active users with a responsive design that works seamlessly across all devices.",
            liveUrl: "https://portfolio.yassinebenhamzah.com",
            codeUrl: "https://github.com/YassineBenhamzah/Portfolio",
        },
        {
            id: 2,
            title: "ELearnin Website",
            icon: "📚",
            image: elearning,
            // color: "from-blue-500 to-cyan-500",
            description:
                "A modern E-learning platform developed with Next.js and tailwindcss. It allows for the visualization of courses, smooth navigation, and a responsive interface designed for users..",
            tech: ["Next", "Tailwindcss"],
            details:
                "Increased productivity by 40% for beta users through intelligent task prioritization and automated scheduling suggestions.",
            liveUrl: "https://elearning.yassinebenhamzah.com",
            codeUrl: "https://github.com/YassineBenhamzah/E-Learning",
        },
        {
            id: 3,
            title: "new Portfolio",
            icon: "🚀",
            image: newportf,
            // color: "from-green-500 to-teal-500",
            description:
                "Passionate Full Stack Developer with expertise in creating dynamic and responsive web applications. I specialize in React.js for building interactive user interfaces, Laravel for robust backend solutions, and MySQL for efficient database management. I transform ideas into elegant, functional, and scalable digital experiences.",
            tech: ["React", "Laravel", "Mysql", "Tailwind"],
            details:
                "Processes millions of data points in real-time with beautiful visualizations and exportable reports in multiple formats.",
            liveUrl: "https://yassinebenhamzah.com",
            codeUrl: "https://github.com/YassineBenhamzah/New_Portfolio",
        },
        {
            id: 4,
            title: "Agence Web",
            icon: "📊",
            image: agence,
            // color: "from-green-500 to-teal-500",
            description:
                "A sleek and professional web agency platform showcasing comprehensive digital services. Built with modern web technologies, this project demonstrates expertise in creating polished, user-focused business websites.",
            tech: ["mysql", "laravel", "bootstrap"],
            details:
                "Processes millions of data points in real-time with beautiful visualizations and exportable reports in multiple formats.",
            liveUrl: "https://agence.yassinebenhamzah.com",
            codeUrl: "https://github.com/YassineBenhamzah/agence",
        },
        {
            id: 5,
            title: "Restaurant Design",
            icon: "🍽️",
            image: restaurant,
            description:
                "A modern, high-end restaurant landing page built with React and Tailwind CSS. This project focuses on premium UI/UX, featuring a sophisticated design, responsive layouts, and seamless navigation to showcase a fine-dining digital experience.",
            tech: ["React", "Tailwind"],
            details:
                "A beautifully crafted landing page with sophisticated design, responsive layouts, and seamless navigation for a premium dining experience.",
            liveUrl: "https://restaurant.yassinebenhamzah.com",
            codeUrl: "https://github.com/YassineBenhamzah/restaurants_design",
        },
        {
            id: 6,
            title: "RetACar",
            icon: "🚗",
            image: retacarImg,
            description:
                "A full-stack car rental management platform with 3 user roles (Admin, Agent, Customer), featuring analytics dashboards, revenue charts, real-time notifications, smart filters, availability calendar, and auto-generated PDF rental contracts. Dockerized and deployed on Hostinger + Vercel.",
            tech: ["Laravel 12", "React 18", "MySQL", "Sanctum", "Docker", "Vite"],
            details:
                "Three dedicated user interfaces — Admin analytics dashboard with revenue charts, Agent rental management with on-site bookings, Customer browsing with booking, payment, and downloadable contracts.",
            liveUrl: "https://lnkd.in/d7h2C-Ys",
            sourceCodes: [
                { name: "Frontend", url: "https://lnkd.in/e9RGXSft" },
                { name: "Backend", url: "https://lnkd.in/eJ75fka4" }
            ],
        },
        {
            id: 7,
            title: "KanFlow",
            icon: "📋",
            image: kanflowImg,
            description:
                "A premium Kanban project management tool with real-time collaboration powered by Laravel Echo and Pusher. Features drag-and-drop tasks, subtask checklists with animated progress bars, priority flagging, due dates, and integrated team chat within each task modal.",
            tech: ["Next.js", "Laravel", "MySQL", "Pusher", "Tailwind CSS", "Framer Motion"],
            details:
                "Real-time collaboration with presence tracking, dynamic Kanban boards with fluid drag-and-drop UI, detailed task management with subtask checklists, and a luxury dark-mode aesthetic.",
            liveUrl: "https://lnkd.in/dGqhPcpU",
            sourceCodes: [],
        },
        {
            id: 8,
            title: "Bin with Brain",
            icon: "🧠",
            image: binwithbrainImg,
            description:
                "An AI-powered enterprise document management system that reads uploaded files automatically. Drop a PDF, PNG, or JPG and the AI extracts text via Tesseract.js OCR. Features tri-axis search across document name, AI-extracted content, and uploader name. Fully containerized with 5 Docker microservices.",
            tech: ["Next.js", "React 19", "TypeScript", "Laravel 12", "Docker", "Tesseract.js", "MySQL"],
            details:
                "Microservices architecture with Laravel API, MySQL, Queue Worker, OCR Engine (Node.js + Tesseract.js with warm worker pool), and Next.js frontend — all orchestrated via Docker Compose.",
            liveUrl: "#",
            sourceCodes: [
                { name: "API", url: "https://github.com/YassineBenhamzah/bin-brain-api" },
                { name: "Frontend", url: "https://github.com/YassineBenhamzah/bin-brain-frontend" },
                { name: "Docker", url: "https://github.com/YassineBenhamzah/bin-brain-docker" },
                { name: "OCR", url: "https://github.com/YassineBenhamzah/bin-brain-ocr" }
            ],
        },
        
    ];

    const handleCardClick = (id) => {
        setSelectedCard(selectedCard === id ? null : id);
    };

    const handleClose = () => {
        setSelectedCard(null);
    };

    return (
        <div className="relative pt-20 px-4 md:px-6 lg:px-12 min-h-screen overflow-hidden">
            <BackMatrix />

            {/* Gradient overlay */}
            <div
                className={`absolute inset-0 z-0 ${
                    isDarkMode
                        ? "bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50"
                        : "bg-gradient-to-b from-white/70 via-white/30 to-white/70"
                }`}
            ></div>

            {/* Animated background orbs */}
            <div
                className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse ${
                    isDarkMode ? "bg-purple-500/10" : "bg-purple-500/5"
                }`}
            ></div>
            <div
                className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
                    isDarkMode ? "bg-cyan-500/10" : "bg-cyan-500/5"
                }`}
            ></div>

            {/* Header Section */}
            <div className="relative z-10 text-center   mt-12">
                <div className="inline-block mb-4">
                    <span
                        className={`px-4 py-2 border rounded-full text-sm font-semibold backdrop-blur-sm ${
                            isDarkMode
                                ? "bg-green-500/10 border-green-500/30 text-green-400"
                                : "bg-green-50 border-green-200 text-green-700"
                        }`}
                    >
                        Projects
                    </span>
                </div>
                <h1
                    className={`text-4xl md:text-5xl font-bold mb-4 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                    <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                        Featured Projects
                    </span>
                </h1>
                <p
                    className={`text-lg max-w-2xl mx-auto ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                    Explore my latest work and creative solutions
                </p>
            </div>

            {/* Content wrapper with proper centering */}
            <div className="relative z-10 flex justify-center items-start min-h-screen pt-8 md:pt-16">
                <div
                    className={`w-full max-w-7xl transition-all duration-500 ${
                        selectedCard
                            ? "flex flex-col lg:flex-row gap-6 lg:gap-8"
                            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                    }`}
                >
                    {/* Cards */}
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`transition-all duration-500 ease-in-out w-full ${
                                selectedCard === null
                                    ? "opacity-100 scale-100 max-w-sm mx-auto"
                                    : selectedCard === project.id
                                    ? "opacity-100 scale-100 max-w-sm mx-auto lg:max-w-none lg:w-90 lg:flex-shrink-0"
                                    : "opacity-100 scale-100 max-w-sm mx-auto lg:opacity-0 lg:scale-75 lg:hidden"
                            }`}
                        >
                            <div
                                onClick={() => {
                                    // Only allow click expansion on desktop
                                    if (window.innerWidth >= 1024) {
                                        handleCardClick(project.id);
                                    }
                                }}
                                className={`rounded-2xl overflow-hidden transform transition-all duration-300 shadow-xl backdrop-blur-lg ${
                                    isDarkMode
                                        ? "bg-gray-800/50 border border-gray-700/50"
                                        : "bg-white/70 border border-gray-200"
                                } ${
                                    window.innerWidth >= 1024
                                        ? "cursor-pointer hover:scale-105 hover:shadow-2xl"
                                        : ""
                                } ${
                                    selectedCard === project.id
                                        ? "cursor-default"
                                        : ""
                                }`}
                            >
                                {/* Card Image */}
                                <div className="relative h-40 sm:h-48 overflow-hidden">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className={`w-full h-full flex items-center justify-center ${
                                            isDarkMode
                                                ? "bg-gradient-to-br from-gray-800 to-gray-900"
                                                : "bg-gradient-to-br from-gray-100 to-gray-200"
                                        }`}>
                                            <span className="text-6xl">{project.icon}</span>
                                        </div>
                                    )}
                                    <div
                                        className={`absolute top-3 left-3 sm:top-4 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg ${
                                            isDarkMode
                                                ? "bg-gray-800/90"
                                                : "bg-white/90"
                                        }`}
                                    >
                                        {project.icon}
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-4 sm:p-6">
                                    {/* Card Title */}
                                    <h3
                                        className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 ${
                                            isDarkMode
                                                ? "text-white"
                                                : "text-gray-800"
                                        }`}
                                    >
                                        {project.title}
                                    </h3>

                                    {/* Card Short Description */}
                                    <p
                                        className={`text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 ${
                                            isDarkMode
                                                ? "text-gray-300"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        {project.description.substring(0, 100)}
                                        ...
                                    </p>

                                    {/* Mobile: Action Buttons | Desktop: View More Indicator */}
                                    <div className="lg:hidden">
                                        {/* Mobile Buttons */}
                                        <div className="flex gap-2 mt-4">
                                            <a
                                                href={project.liveUrl}
                                                className={`flex-1 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg text-xs font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                                            >
                                                Live Demo
                                            </a>
                                            <button
                                                href={project.codeUrl}
                                                className={`flex-1 py-2 border-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                                                    isDarkMode
                                                        ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50"
                                                        : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                                                }`}
                                            >
                                                View Code
                                            </button>
                                        </div>
                                    </div>

                                    {/* Desktop: Click to expand indicator */}
                                    {selectedCard !== project.id && (
                                        <div
                                            className={`hidden lg:flex items-center font-semibold text-sm mt-4 ${
                                                isDarkMode
                                                    ? "text-green-400"
                                                    : "text-green-600"
                                            }`}
                                        >
                                            <span>Click to expand</span>
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Details Panel - Desktop Only */}
                    {selectedCard && (
                        <div
                            className={`hidden lg:block flex-1 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl transform transition-all duration-500 animate-slideIn backdrop-blur-lg ${
                                isDarkMode
                                    ? "bg-gray-800/50 border border-gray-700/50"
                                    : "bg-white/70 border border-gray-200"
                            }`}
                        >
                            <div className="flex justify-between items-start mb-4 sm:mb-6">
                                <h2
                                    className={`text-2xl sm:text-3xl font-bold ${
                                        isDarkMode
                                            ? "text-white"
                                            : "text-gray-800"
                                    }`}
                                >
                                    Project Details
                                </h2>
                                <button
                                    onClick={handleClose}
                                    className={`transition-colors p-2 rounded-lg ${
                                        isDarkMode
                                            ? "text-gray-400 hover:text-gray-200 hover:bg-gray-700/50"
                                            : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                                    }`}
                                >
                                    <svg
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {projects
                                .filter((p) => p.id === selectedCard)
                                .map((project) => (
                                    <div
                                        key={project.id}
                                        className="space-y-4 sm:space-y-6"
                                    >
                                        {/* Project Image */}
                                        <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden">
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className={`w-full h-full flex items-center justify-center ${
                                                    isDarkMode
                                                        ? "bg-gradient-to-br from-gray-800 to-gray-900"
                                                        : "bg-gradient-to-br from-gray-100 to-gray-200"
                                                }`}>
                                                    <span className="text-8xl">{project.icon}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Full Description */}
                                        <div>
                                            <h3
                                                className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${
                                                    isDarkMode
                                                        ? "text-gray-200"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                Description
                                            </h3>
                                            <p
                                                className={`text-sm sm:text-base leading-relaxed ${
                                                    isDarkMode
                                                        ? "text-gray-300"
                                                        : "text-gray-600"
                                                }`}
                                            >
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Additional Details */}
                                        <div>
                                            <h3
                                                className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${
                                                    isDarkMode
                                                        ? "text-gray-200"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                Key Features
                                            </h3>
                                            <p
                                                className={`text-sm sm:text-base leading-relaxed ${
                                                    isDarkMode
                                                        ? "text-gray-300"
                                                        : "text-gray-600"
                                                }`}
                                            >
                                                {project.details}
                                            </p>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h3
                                                className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${
                                                    isDarkMode
                                                        ? "text-gray-200"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                Technologies Used
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map(
                                                    (tech, index) => (
                                                        <span
                                                            key={index}
                                                            className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r ${project.color} text-white rounded-lg text-xs sm:text-sm font-medium shadow-md`}
                                                        >
                                                            {tech}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}

                                        <div className="flex gap-2 mt-4">
                                            <a
                                                href={project.liveUrl}
                                                
                                                className={`flex-1 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg text-xs font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center`}
                                            >
                                                Live Demo
                                            </a>
                                            {project.codeUrl && project.codeUrl !== "#" && (
                                                <a 
                                                    href={project.codeUrl}
                                                    target="_blank" rel="noopener noreferrer"
                                                    className={`flex-1 py-2 border-2 rounded-lg text-xs font-semibold transition-all duration-300 text-center ${
                                                        isDarkMode
                                                            ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50"
                                                            : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                                                    }`}
                                                >
                                                    View Code
                                                </a>
                                            )}
                                            {project.sourceCodes && project.sourceCodes.map((source, i) => (
                                                <a 
                                                    key={i}
                                                    href={source.url}
                                                    target="_blank" rel="noopener noreferrer"
                                                    className={`flex-1 py-2 border-2 rounded-lg text-xs font-semibold transition-all duration-300 text-center ${
                                                        isDarkMode
                                                            ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50"
                                                            : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                                                    }`}
                                                >
                                                    {source.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-slideIn {
                    animation: slideIn 0.5s ease-out;
                }
            `}</style>
        </div>
    );
}
