import React from 'react';
import BackMatrix from './BackMatrix';

import { useStateContext } from '../contexts/ContextProvider';
import ThemeToggle from '../ThemeToggle';

export default function Services() {
    const { isDarkMode } = useStateContext();
    
    const services = [
        {
            title: "Web Development",
            description:
                "Building high-performance web applications using Laravel, React.js, and MySQL with modern best practices.",
            icon: "💻",
        },
        {
            title: "Full-Stack Development",
            description:
                "Creating dynamic and scalable web applications with expertise in both front-end and back-end development.",
            icon: "🚀",
        },
        {
            title: "API Development & Integration",
            description:
                "Creating RESTful APIs and integrating third-party services like payment gateways, SMS, and VoIP solutions.",
            icon: "🔌",
        },
        {
            title: "UI/UX Design & Frontend Development",
            description:
                "Designing responsive and interactive user interfaces using modern frameworks and best practices.",
            icon: "🎨",
        },
        {
            title: "Custom CRM Development",
            description:
                "Designing and developing customer relationship management (CRM) systems tailored to business needs using Laravel and React.js.",
            icon: "📊",
        },
        {
            title: "E-Commerce Solutions",
            description:
                "Developing secure and scalable e-commerce platforms using Laravel, MocCommerce, or Shopify integrations.",
            icon: "🛒",
        },
        {
            title: "Database Design & Optimization",
            description:
                "Designing scalable and optimized database structures using MySQL, improving performance and data management.",
            icon: "🗄️",
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
            <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
                isDarkMode ? 'bg-cyan-500/10' : 'bg-cyan-500/5'
            }`}></div>

            <div className="relative z-10 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className={`px-4 py-2 border rounded-full text-sm font-semibold backdrop-blur-sm ${
                                isDarkMode
                                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                                    : 'bg-green-50 border-green-200 text-green-700'
                            }`}>
                                What We Offer
                            </span>
                        </div>
                        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                                Our Services
                            </span>
                        </h1>
                        <p className={`text-xl max-w-3xl mx-auto ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            Professional web development services tailored to your needs
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mt-8 rounded-full"></div>
                    </div>

                    {/* Services Grid - 2 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`rounded-xl shadow-lg border backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl p-8 group ${
                                    isDarkMode
                                        ? 'bg-gray-800/50 border-gray-700/50 hover:border-green-500/50 hover:bg-gray-800/70'
                                        : 'bg-white/70 border-gray-200 hover:border-green-500/50 hover:bg-white/90'
                                }`}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-2xl font-semibold mb-3 ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                            {service.title}
                                        </h3>
                                        <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mb-4 rounded-full"></div>
                                        <p className={`leading-relaxed ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Effect Decoration */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-16">
                        <button className={`font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                            isDarkMode
                                ? 'bg-green-500 hover:bg-green-400 text-gray-900'
                                : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}>
                            Start Your Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}