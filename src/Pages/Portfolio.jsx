import React from "react";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
import Footer from "./Footer";
import SEO from "../Components/SEO";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";

export default function Portfolio() {
    const { isDarkMode } = useStateContext();

    return (
        <div className={isDarkMode ? "bg-gray-950" : "bg-gray-50"}>
            <SEO
                title="Yassine Benhamzah - Full Stack Developer"
                description="Full Stack Developer specializing in React, Laravel, and modern web technologies. View my projects and get in touch."
                keywords="portfolio, web developer, react, laravel, full stack, frontend, backend"
            />

            {/* Hero Section */}
            <Hero />

            {/* Featured Projects */}
            <FeaturedProjects />

            {/* About Preview Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left — Text */}
                        <div>
                            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 ${
                                isDarkMode
                                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                    : "bg-green-50 text-green-700 border border-green-200"
                            }`}>
                                💡 About Me
                            </span>
                            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
                                isDarkMode ? "text-white" : "text-gray-900"
                            }`}>
                                Passionate about building{" "}
                                <span className="gradient-text-green">digital experiences</span>
                            </h2>
                            <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}>
                                I'm a Full Stack Developer with a strong focus on creating scalable, performant, and visually stunning web applications. 
                                From RESTful APIs with Laravel to interactive UIs with React, I bring ideas to life through clean, maintainable code.
                            </p>
                            <p className={`text-sm sm:text-base leading-relaxed mb-8 ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}>
                                My journey has taken me through building car rental platforms, AI-powered document systems, real-time collaboration tools, 
                                and everything in between. I thrive on solving complex problems and delivering premium user experiences.
                            </p>
                            <Link to="/skills"
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                                    isDarkMode
                                        ? "bg-gray-800 text-green-400 border border-gray-700 hover:border-green-500/30"
                                        : "bg-gray-100 text-green-600 border border-gray-200 hover:border-green-500/30"
                                }`}>
                                View My Skills
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        {/* Right — Services Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: "💻", title: "Web Development", desc: "Modern full-stack applications" },
                                { icon: "🎨", title: "UI/UX Design", desc: "Premium user interfaces" },
                                { icon: "🔌", title: "API Development", desc: "RESTful & real-time APIs" },
                                { icon: "🐳", title: "DevOps", desc: "Docker & CI/CD pipelines" },
                            ].map((service, i) => (
                                <div key={i} className={`group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                                    isDarkMode
                                        ? "bg-gray-900/50 border-gray-800 hover:border-green-500/20"
                                        : "bg-white border-gray-200 hover:border-green-500/20"
                                }`}>
                                    <span className="text-2xl block mb-3 group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                                    <h3 className={`text-sm font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`relative rounded-3xl p-10 sm:p-16 overflow-hidden ${
                        isDarkMode ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-200"
                    }`}>
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px]"></div>

                        <div className="relative z-10">
                            <span className="text-4xl sm:text-5xl block mb-6">🤝</span>
                            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
                                isDarkMode ? "text-white" : "text-gray-900"
                            }`}>
                                Let's work <span className="gradient-text-green">together</span>
                            </h2>
                            <p className={`text-base sm:text-lg max-w-xl mx-auto mb-8 ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}>
                                Have a project in mind? I'm always open to new opportunities, collaborations, and interesting challenges.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link to="/contact"
                                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105 transition-all duration-300">
                                    Get In Touch
                                </Link>
                                <a href="https://drive.google.com/file/d/18861mx4T1fa2Ap4ngRes3tefjoN5Um9W/view?usp=drive_link"
                                    target="_blank" rel="noreferrer"
                                    className={`px-8 py-4 rounded-xl font-semibold text-sm border-2 transition-all duration-300 hover:scale-105 ${
                                        isDarkMode
                                            ? "border-gray-700 text-gray-300 hover:border-green-500/50 hover:text-green-400"
                                            : "border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600"
                                    }`}>
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
