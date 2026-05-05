import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";
import kanflowImg from "../images/kanflow.png";
import retacarImg from "../images/retacar.png";
import binwithbrainImg from "../images/binwithbrain.jpg";

const featuredProjects = [
    {
        id: 1,
        title: "RetACar",
        emoji: "🚗",
        tagline: "Car Rental Platform",
        description: "A full-stack car rental management app with 3 user roles — Admin analytics dashboard, Agent rental management, and Customer booking with auto-generated PDF contracts.",
        tech: ["Laravel 12", "React 18", "MySQL", "Sanctum", "Docker", "Vite"],
        image: retacarImg,
        liveUrl: "https://lnkd.in/d7h2C-Ys",
        sourceCodes: [
            { name: "Frontend", url: "https://lnkd.in/e9RGXSft" },
            { name: "Backend", url: "https://lnkd.in/eJ75fka4" }
        ],
        gradient: "from-blue-500 to-cyan-500",
        accentColor: "blue",
        features: ["Role-Based Access", "PDF Contracts", "Real-time Notifications", "Availability Calendar"],
    },
    {
        id: 2,
        title: "KanFlow",
        emoji: "📋",
        tagline: "Kanban Management Tool",
        description: "A premium Kanban project management tool with real-time collaboration via Pusher, drag-and-drop tasks, subtask checklists, integrated team chat, and a luxury dark-mode UI.",
        tech: ["Next.js", "Laravel", "MySQL", "Pusher", "Tailwind CSS", "Framer Motion"],
        image: kanflowImg,
        liveUrl: "https://lnkd.in/dGqhPcpU",
        sourceCodes: [],
        gradient: "from-purple-500 to-pink-500",
        accentColor: "purple",
        features: ["Real-time Collaboration", "Drag & Drop", "Team Chat", "Subtask Checklists"],
    },
    {
        id: 3,
        title: "Bin with Brain",
        emoji: "🧠",
        tagline: "AI Document Vault",
        description: "An AI-powered enterprise document management system with OCR text extraction via Tesseract.js, tri-axis search, role-based access, and a fully containerized microservices architecture with 5 Docker services.",
        tech: ["Next.js", "React 19", "TypeScript", "Laravel 12", "Docker", "Tesseract.js"],
        image: binwithbrainImg,
        liveUrl: "#",
        sourceCodes: [
            { name: "API", url: "https://github.com/YassineBenhamzah/bin-brain-api" },
            { name: "Frontend", url: "https://github.com/YassineBenhamzah/bin-brain-frontend" },
            { name: "Docker", url: "https://github.com/YassineBenhamzah/bin-brain-docker" },
            { name: "OCR", url: "https://github.com/YassineBenhamzah/bin-brain-ocr" }
        ],
        gradient: "from-emerald-500 to-teal-500",
        accentColor: "emerald",
        features: ["AI-Powered OCR", "Tri-Axis Search", "Microservices", "Docker Compose"],
    },
];

export default function FeaturedProjects() {
    const { isDarkMode } = useStateContext();
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section id="featured" className="relative py-24 px-4 sm:px-6 lg:px-12">
            {/* Section Header */}
            <div className="max-w-6xl mx-auto mb-16">
                <div className="text-center">
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 ${
                        isDarkMode
                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                            : "bg-green-50 text-green-700 border border-green-200"
                    }`}>
                        🚀 Latest Work
                    </span>
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        Featured <span className="gradient-text-green">Projects</span>
                    </h2>
                    <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                        Real-world applications built with modern technologies and best practices
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                            isDarkMode
                                ? "bg-gray-900/80 border border-gray-800 hover:border-green-500/30"
                                : "bg-white border border-gray-200 hover:border-green-500/30"
                        } hover:shadow-2xl ${isDarkMode ? "hover:shadow-green-500/5" : "hover:shadow-green-500/10"}`}
                        style={{ animationDelay: `${index * 150}ms` }}
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        {/* Top gradient accent */}
                        <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>

                        {/* Project Image Header */}
                        <div className="relative h-48 w-full overflow-hidden border-b border-gray-800/50">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            ) : (
                                <div className={`w-full h-full flex items-center justify-center ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                                    <span className="text-5xl">{project.emoji}</span>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                            
                            <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                <span className={`text-2xl w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md bg-black/40 border border-white/10 shadow-xl`}>
                                    {project.emoji}
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold text-white shadow-sm">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs font-medium text-gray-300 shadow-sm">
                                        {project.tagline}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 sm:p-7 pt-5">
                            {/* Description */}
                            <p className={`text-sm leading-relaxed mb-5 ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}>
                                {project.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.features.map((feature, i) => (
                                    <span key={i} className={`text-[11px] font-medium px-2.5 py-1 rounded-lg ${
                                        isDarkMode
                                            ? "bg-gray-800 text-gray-400 border border-gray-700/50"
                                            : "bg-gray-100 text-gray-600 border border-gray-200"
                                    }`}>
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-1.5 mb-6">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className={`text-[10px] font-semibold px-2 py-1 rounded-md ${
                                        isDarkMode
                                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                            : "bg-green-50 text-green-700 border border-green-200"
                                    }`}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Action Links */}
                            <div className="flex flex-wrap items-center gap-3">
                                {project.liveUrl !== "#" && (
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer"
                                        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105">
                                        <FaExternalLinkAlt className="w-3 h-3" />
                                        Live Demo
                                    </a>
                                )}
                                {project.codeUrl && project.codeUrl !== "#" && (
                                    <a href={project.codeUrl} target="_blank" rel="noreferrer"
                                        className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl border transition-all duration-300 hover:scale-105 ${
                                            isDarkMode
                                                ? "border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800"
                                                : "border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50"
                                        }`}>
                                        <FaGithub className="w-3.5 h-3.5" />
                                        Source Code
                                    </a>
                                )}
                                {project.sourceCodes && project.sourceCodes.map((source, i) => (
                                    <a key={i} href={source.url} target="_blank" rel="noreferrer"
                                        className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl border transition-all duration-300 hover:scale-105 ${
                                            isDarkMode
                                                ? "border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800"
                                                : "border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50"
                                        }`}>
                                        <FaGithub className="w-3.5 h-3.5" />
                                        {source.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Hover glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}></div>
                    </div>
                ))}
            </div>

            {/* View All Projects */}
            <div className="text-center mt-12">
                <Link to="/projects"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 group ${
                        isDarkMode
                            ? "bg-gray-800 text-gray-300 hover:text-green-400 border border-gray-700 hover:border-green-500/30"
                            : "bg-gray-100 text-gray-700 hover:text-green-600 border border-gray-200 hover:border-green-500/30"
                    }`}>
                    View All Projects
                    <FaArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
}
