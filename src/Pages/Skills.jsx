import React, { useState } from "react";
import BackMatrix from "./BackMatrix";
import { useStateContext } from "../contexts/ContextProvider";
import { 
    SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss3, 
    SiTailwindcss, SiVuedotjs, SiBootstrap, SiPhp, SiLaravel, SiCodeigniter,
    SiMysql, SiPostgresql, SiMongodb, SiSupabase, SiGit, SiGithub, 
    SiGithubactions, SiVercel
} from "react-icons/si";
import { FaDatabase, FaUsers, FaBrain, FaClock, FaLightbulb, FaComments } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [activeCategory, setActiveCategory] = useState(0);
    const { isDarkMode } = useStateContext();
    
    const skillsData = [
        {
            category: "Frontend",
            icon: "🎨",
            skills: [
                { name: "React.js", icon: <SiReact />, color: "text-cyan-400" },
                { name: "Next.js", icon: <SiNextdotjs />, color: isDarkMode ? "text-white" : "text-black" },
                { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
                { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
                { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
                { name: "CSS3", icon: <SiCss3 />, color: "text-blue-400" },
                { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
                { name: "Vue.js", icon: <SiVuedotjs />, color: "text-green-500" },
                { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-500" },
            ],
            color: "from-green-400 to-emerald-500",
            shadowColor: "shadow-green-500/20",
            glowColor: "rgba(34, 197, 94, 0.3)",
            borderColor: "rgba(34, 197, 94, 0.5)",
            hoverBorderColor: "rgba(34, 197, 94, 0.3)",
        },
        {
            category: "Backend",
            icon: "⚙️",
            skills: [
                { name: "PHP", icon: <SiPhp />, color: "text-indigo-400" },
                { name: "Laravel", icon: <SiLaravel />, color: "text-red-500" },
                { name: "CodeIgniter", icon: <SiCodeigniter />, color: "text-orange-600" },
                { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
                { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
                { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
                { name: "Supabase", icon: <SiSupabase />, color: "text-emerald-500" },
                { name: "REST APIs", icon: <FaDatabase />, color: "text-purple-400" },
            ],
            color: "from-cyan-400 to-blue-500",
            shadowColor: "shadow-cyan-500/20",
            glowColor: "rgba(34, 211, 238, 0.3)",
            borderColor: "rgba(34, 211, 238, 0.5)",
            hoverBorderColor: "rgba(34, 211, 238, 0.3)",
        },
        {
            category: "DevOps & Tools",
            icon: "🛠️",
            skills: [
                { name: "Git", icon: <SiGit />, color: "text-orange-500" },
                { name: "GitHub", icon: <SiGithub />, color: isDarkMode ? "text-white" : "text-black" },
                { name: "GitHub Actions", icon: <SiGithubactions />, color: "text-blue-500" },
                { name: "Vercel", icon: <SiVercel />, color: isDarkMode ? "text-white" : "text-black" },
                { name: "Agile/Scrum", icon: <MdDashboard />, color: "text-green-400" },
                { name: "Kanban", icon: <MdDashboard />, color: "text-blue-400" },
            ],
            color: "from-purple-400 to-indigo-500",
            shadowColor: "shadow-purple-500/20",
            glowColor: "rgba(168, 85, 247, 0.3)",
            borderColor: "rgba(168, 85, 247, 0.5)",
            hoverBorderColor: "rgba(168, 85, 247, 0.3)",
        },
        {
            category: "Soft Skills",
            icon: "💡",
            skills: [
                { name: "Teamwork", icon: <FaUsers />, color: "text-blue-400" },
                { name: "Problem Solving", icon: <FaBrain />, color: "text-purple-400" },
                { name: "Time Management", icon: <FaClock />, color: "text-green-400" },
                { name: "Adaptability", icon: <FaLightbulb />, color: "text-yellow-400" },
                { name: "Communication", icon: <FaComments />, color: "text-cyan-400" },
            ],
            color: "from-amber-400 to-orange-500",
            shadowColor: "shadow-amber-500/20",
            glowColor: "rgba(251, 191, 36, 0.3)",
            borderColor: "rgba(251, 191, 36, 0.5)",
            hoverBorderColor: "rgba(251, 191, 36, 0.3)",
        },
    ];
    
    return (
        <div className="relative pt-20 px-4 min-h-screen overflow-hidden">
            {/* Background */}
            <BackMatrix />
            
            {/* Gradient overlay */}
            <div className={`absolute inset-0 z-0 ${
                isDarkMode
                    ? 'bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50'
                    : 'bg-gradient-to-b from-white/70 via-white/30 to-white/70'
            }`}></div>

            {/* Animated background orbs */}
            <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse ${
                isDarkMode ? 'bg-green-500/10' : 'bg-green-500/5'
            }`}></div>
            <div className={`absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
                isDarkMode ? 'bg-cyan-500/10' : 'bg-cyan-500/5'
            }`}></div>

            {/* Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto pb-20">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4 mt-7">
                        <span className={`px-4 py-2 border rounded-full text-sm font-semibold backdrop-blur-sm ${
                            isDarkMode
                                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                                : 'bg-green-50 border-green-200 text-green-700'
                        }`}>
                            Technical Expertise
                        </span>
                    </div>
                    <h1 className={`text-6xl md:text-7xl font-bold mb-6 tracking-tight ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        <span className="block mt-2 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                            Skills & Expertise
                        </span>
                    </h1>
                    <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        Full Stack Developer specialized in building scalable
                        web applications with modern technologies
                    </p>
                </div>

                {/* Desktop: Side-by-side layout */}
                <div className="hidden lg:grid lg:grid-cols-12 gap-8 mb-16">
                    {/* Left side - Category selector */}
                    <div className="lg:col-span-4 space-y-4">
                        {skillsData.map((category, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveCategory(idx)}
                                onMouseEnter={() => setActiveCategory(idx)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 border-2 ${
                                    activeCategory === idx
                                        ? isDarkMode
                                            ? "bg-gray-800/80 backdrop-blur-lg shadow-2xl scale-105"
                                            : "bg-white/90 backdrop-blur-lg shadow-2xl scale-105"
                                        : isDarkMode
                                            ? "bg-gray-800/40 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/60"
                                            : "bg-white/60 backdrop-blur-sm border-gray-300/50 hover:bg-white/80"
                                }`}
                                style={{
                                    borderColor: activeCategory === idx 
                                        ? category.borderColor 
                                        : undefined,
                                    boxShadow: activeCategory === idx 
                                        ? `0 25px 50px -12px ${category.glowColor}`
                                        : undefined
                                }}
                                onMouseOver={(e) => {
                                    if (activeCategory !== idx) {
                                        e.currentTarget.style.borderColor = category.hoverBorderColor;
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (activeCategory !== idx) {
                                        e.currentTarget.style.borderColor = '';
                                    }
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`text-5xl transition-transform duration-500 ${
                                            activeCategory === idx
                                                ? "scale-110"
                                                : "scale-100"
                                        }`}
                                    >
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl font-bold mb-1 ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                            {category.category}
                                        </h3>
                                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {category.skills.length} skills
                                        </p>
                                    </div>
                                </div>

                                {/* Active indicator */}
                                {activeCategory === idx && (
                                    <div
                                        className={`mt-4 h-1 rounded-full bg-gradient-to-r ${category.color}`}
                                    ></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right side - Skills display with ICONS */}
                    <div className="lg:col-span-8">
                        <div className={`backdrop-blur-xl rounded-3xl p-8 border min-h-[600px] relative overflow-hidden ${
                            isDarkMode
                                ? 'bg-gray-800/50 border-green-500/20'
                                : 'bg-white/70 border-gray-300'
                        }`}>
                            {/* Gradient accent */}
                            <div
                                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${skillsData[activeCategory].color} opacity-5 blur-3xl rounded-full`}
                            ></div>

                            <div className="relative z-10">
                                <div className={`flex items-center gap-4 mb-8 pb-6 border-b ${
                                    isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'
                                }`}>
                                    <span className="text-6xl">
                                        {skillsData[activeCategory].icon}
                                    </span>
                                    <div>
                                        <h2 className={`text-4xl font-bold ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                            {skillsData[activeCategory].category}
                                        </h2>
                                        <p className={`mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            Technologies I work with
                                        </p>
                                    </div>
                                </div>

                                {/* Skills Icons Grid */}
                                <div className="grid grid-cols-3 gap-6">
                                    {skillsData[activeCategory].skills.map(
                                        (skill, skillIdx) => (
                                            <div
                                                key={skillIdx}
                                                onMouseEnter={() => setHoveredSkill(skillIdx)}
                                                onMouseLeave={() => setHoveredSkill(null)}
                                                className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                                                    hoveredSkill === skillIdx
                                                        ? isDarkMode
                                                            ? 'bg-gray-900/70 border-green-500/50 scale-110 shadow-2xl'
                                                            : 'bg-white/90 border-green-500/50 scale-110 shadow-2xl'
                                                        : isDarkMode
                                                            ? 'bg-gray-900/30 border-gray-700/30 hover:bg-gray-900/50'
                                                            : 'bg-white/50 border-gray-200 hover:bg-white/70'
                                                }`}
                                                style={{
                                                    animationDelay: `${skillIdx * 50}ms`,
                                                }}
                                            >
                                                {/* Icon */}
                                                <div className={`text-6xl mb-4 transition-all duration-300 ${
                                                    hoveredSkill === skillIdx ? 'scale-125' : ''
                                                } ${skill.color}`}>
                                                    {skill.icon}
                                                </div>

                                                {/* Skill Name */}
                                                <span className={`text-sm font-semibold text-center transition-all duration-300 ${
                                                    hoveredSkill === skillIdx
                                                        ? isDarkMode
                                                            ? 'text-white'
                                                            : 'text-gray-900'
                                                        : isDarkMode
                                                            ? 'text-gray-400'
                                                            : 'text-gray-600'
                                                }`}>
                                                    {skill.name}
                                                </span>

                                                {/* Hover Glow Effect */}
                                                {hoveredSkill === skillIdx && (
                                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skillsData[activeCategory].color} opacity-10 blur-xl`}></div>
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet: Card grid */}
                <div className="lg:hidden grid md:grid-cols-2 gap-6">
                    {skillsData.map((category, idx) => (
                        <div
                            key={idx}
                            className="relative group"
                            onMouseEnter={() => setHoveredSkill(idx)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <div className={`relative backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                                isDarkMode
                                    ? 'bg-gray-800/50 border-gray-700/50 hover:border-green-500/50 hover:bg-gray-800/70'
                                    : 'bg-white/70 border-gray-300 hover:border-green-500/50 hover:bg-white/90'
                            } ${category.shadowColor}`}>
                                <div
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-xl`}
                                ></div>

                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-4xl">
                                        {category.icon}
                                    </span>
                                    <h3 className={`text-2xl font-bold ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {category.category}
                                    </h3>
                                </div>

                                {/* Mobile Skills Icons */}
                                <div className="grid grid-cols-3 gap-3">
                                    {category.skills.map((skill, skillIdx) => (
                                        <div
                                            key={skillIdx}
                                            className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${
                                                isDarkMode
                                                    ? 'bg-gray-900/30 border-gray-700/30 hover:bg-gray-900/50'
                                                    : 'bg-white/50 border-gray-200 hover:bg-white/70'
                                            }`}
                                        >
                                            <div className={`text-3xl mb-2 ${skill.color}`}>
                                                {skill.icon}
                                            </div>
                                            <span className={`text-xs font-medium text-center ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-5 rounded-bl-full`}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <div className={`inline-block backdrop-blur-xl rounded-3xl p-10 border max-w-3xl ${
                        isDarkMode
                            ? 'bg-gradient-to-r from-gray-800/70 to-gray-800/50 border-green-500/20'
                            : 'bg-gradient-to-r from-white/80 to-white/60 border-gray-300'
                    }`}>
                        <div className="text-5xl mb-4">🚀</div>
                        <h3 className={`text-3xl font-bold mb-4 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                            Always Learning & Growing
                        </h3>
                        <p className={`text-lg leading-relaxed ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            I'm constantly expanding my skillset and staying
                            up-to-date with the latest technologies and best
                            practices in web development. Let's build something
                            amazing together!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}