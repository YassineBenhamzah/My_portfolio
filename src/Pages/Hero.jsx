import React, { useEffect, useState, useMemo } from "react";
import yassine from "../images/yassine_new.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import axiosClient from "../axiosClient";
import BackMatrix from "./BackMatrix";
import { useStateContext } from "../contexts/ContextProvider";

export default function Hero() {
    const [userInformations, setUserInformation] = useState(null);
    const [error, setError] = useState(null);
    const { isDarkMode } = useStateContext();

    // Typing animation
    const roles = useMemo(() => [
        "Full Stack Developer",
        "React Specialist",
        "Laravel Expert",
        "UI/UX Enthusiast",
    ], []);
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) {
            const t = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 2000);
            return () => clearTimeout(t);
        }
        const word = roles[roleIndex];
        const speed = isDeleting ? 35 : 75;
        const t = setTimeout(() => {
            if (!isDeleting) {
                setText(word.substring(0, text.length + 1));
                if (text.length + 1 === word.length) setIsPaused(true);
            } else {
                setText(word.substring(0, text.length - 1));
                if (text.length === 0) { setIsDeleting(false); setRoleIndex((p) => (p + 1) % roles.length); }
            }
        }, speed);
        return () => clearTimeout(t);
    }, [text, isDeleting, isPaused, roleIndex, roles]);

    // Animated counters
    const [counts, setCounts] = useState({ projects: 0, tech: 0, years: 0 });
    useEffect(() => {
        const targets = { projects: 19, tech: 12, years: 4 };
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;
        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = Math.min(step / steps, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCounts({
                projects: Math.round(targets.projects * ease),
                tech: Math.round(targets.tech * ease),
                years: Math.round(targets.years * ease),
            });
            if (step >= steps) clearInterval(timer);
        }, interval);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        axiosClient.get("/informations")
            .then((res) => {
                if (res.data.data && res.data.data.length > 0) setUserInformation(res.data.data[0]);
                else setError("No information found");
            })
            .catch((err) => setError(err.message || "Failed to fetch"));
    }, []);

    if (error) {
        return (
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <BackMatrix />
                <div className={`relative z-10 text-center max-w-md p-8 rounded-2xl backdrop-blur-xl border ${
                    isDarkMode ? "bg-gray-900/80 border-red-500/30" : "bg-white/80 border-red-200"
                }`}>
                    <div className="text-4xl mb-4">⚠️</div>
                    <h2 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-red-400" : "text-red-600"}`}>Connection Error</h2>
                    <p className={`mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{error}</p>
                    <button onClick={() => window.location.reload()}
                        className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                        Try Again
                    </button>
                </div>
            </section>
        );
    }

    if (!userInformations) {
        return (
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <BackMatrix />
                <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin"></div>
                </div>
            </section>
        );
    }

    const stats = [
        { label: "Projects", value: counts.projects, suffix: "+" },
        { label: "Technologies", value: counts.tech, suffix: "+" },
        { label: "Years Exp.", value: counts.years, suffix: "+" },
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 sm:px-6 lg:px-12">
            <BackMatrix />

            {/* Overlays */}
            <div className={`absolute inset-0 z-[1] ${
                isDarkMode
                    ? "bg-gradient-to-b from-gray-950/80 via-gray-950/30 to-gray-950/90"
                    : "bg-gradient-to-b from-white/85 via-white/40 to-white/90"
            }`}></div>

            {/* Decorative Orbs */}
            <div className="absolute top-1/4 -left-32 w-80 h-80 bg-green-500/8 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/6 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/3 rounded-full blur-[200px]"></div>

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto pt-24 pb-8">
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-12 lg:gap-20">

                    {/* Left — Text */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Badge */}
                        <div className="animate-fade-in-up mb-6">
                            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase ${
                                isDarkMode
                                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                    : "bg-green-50 text-green-700 border border-green-200"
                            }`}>
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Available for work
                            </span>
                        </div>

                        {/* Greeting */}
                        <h1 className={`animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                        }`}>
                            {userInformations.title || "Hello"}, I'm{" "}
                            <br className="hidden sm:block" />
                            <span className="gradient-text-green">
                                {userInformations.name || "Yassine"}
                            </span>
                        </h1>

                        {/* Typing Role */}
                        <div className="animate-fade-in-up delay-200 mb-6">
                            <p className={`text-lg sm:text-xl lg:text-2xl font-medium ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}>
                                I'm a <span className={isDarkMode ? "text-green-400" : "text-green-600"}>{text}</span>
                                <span className="typing-cursor"></span>
                            </p>
                        </div>

                        {/* Description */}
                        <p className={`animate-fade-in-up delay-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}>
                            {userInformations.description || "Building modern, scalable web applications with passion and precision."}
                        </p>

                        {/* CTA Buttons */}
                        <div className="animate-fade-in-up delay-400 flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                            <a href="https://drive.google.com/file/d/1pwTzyjRLTHcptCU4xa5irCPl81PspKvb/view?usp=sharing"
                                target="_blank" rel="noreferrer"
                                className="group px-7 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                <svg className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download CV
                            </a>
                            <a href="/projects"
                                className={`px-7 py-3.5 rounded-xl font-semibold text-sm border-2 transition-all duration-300 hover:scale-105 ${
                                    isDarkMode
                                        ? "border-gray-700 text-gray-300 hover:border-green-500/50 hover:text-green-400 hover:bg-green-500/5"
                                        : "border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600 hover:bg-green-50"
                                }`}>
                                View Projects
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="animate-fade-in-up delay-500 flex items-center justify-center lg:justify-start gap-3">
                            {userInformations.social_links?.github && (
                                <a href={userInformations.social_links.github} target="_blank" rel="noreferrer"
                                    className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                                        isDarkMode
                                            ? "bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-700/50"
                                            : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200 border border-gray-200"
                                    }`}>
                                    <FaGithub className="w-5 h-5" />
                                </a>
                            )}
                            {userInformations.social_links?.linkedin && (
                                <a href={userInformations.social_links.linkedin} target="_blank" rel="noreferrer"
                                    className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                                        isDarkMode
                                            ? "bg-gray-800/80 text-gray-400 hover:text-blue-400 hover:bg-gray-700 border border-gray-700/50"
                                            : "bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-gray-200 border border-gray-200"
                                    }`}>
                                    <FaLinkedin className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right — Photo */}
                    <div className="animate-fade-in-up delay-200 relative flex-shrink-0">
                        {/* Animated ring */}
                        <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                            {/* Rotating gradient ring */}
                            <div className="absolute inset-0 rounded-full animate-rotate-slow opacity-60"
                                style={{
                                    background: "conic-gradient(from 0deg, #22c55e, #06b6d4, #8b5cf6, #ec4899, #22c55e)",
                                    padding: "3px",
                                }}>
                                <div className={`w-full h-full rounded-full ${isDarkMode ? "bg-gray-950" : "bg-gray-100"}`}></div>
                            </div>

                            {/* Photo container */}
                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                                <div className={`w-full h-full rounded-full overflow-hidden flex items-center justify-center ${
                                    isDarkMode ? "bg-gray-800" : "bg-gray-200"
                                }`}>
                                    <img src={yassine} alt="Yassine Benhamzah" className="w-full h-full object-cover rounded-full" />
                                </div>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-full animate-glow"></div>

                            {/* Floating decorative elements */}
                            <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-xl flex items-center justify-center text-lg shadow-lg animate-float ${
                                isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
                            }`}>⚛️</div>
                            <div className={`absolute -bottom-2 -left-4 w-12 h-12 rounded-xl flex items-center justify-center text-lg shadow-lg animate-float-delay ${
                                isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
                            }`}>🚀</div>
                            <div className={`absolute top-1/2 -right-6 w-10 h-10 rounded-lg flex items-center justify-center text-sm shadow-lg animate-float-slow ${
                                isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
                            }`}>💻</div>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="animate-fade-in-up delay-600 mt-16 lg:mt-20">
                    <div className={`rounded-2xl p-6 sm:p-8 grid grid-cols-3 gap-4 sm:gap-8 ${
                        isDarkMode ? "glass-dark" : "glass-light"
                    }`}>
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text-green">
                                    {stat.value}{stat.suffix}
                                </p>
                                <p className={`text-xs sm:text-sm mt-1 font-medium ${
                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="relative z-10 flex justify-center pb-8">
                <a href="#featured" className={`flex flex-col items-center gap-2 transition-colors ${
                    isDarkMode ? "text-gray-500 hover:text-green-400" : "text-gray-400 hover:text-green-600"
                }`}>
                    <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
                    <HiChevronDown className="w-5 h-5 animate-scroll-bounce" />
                </a>
            </div>
        </section>
    );
}
