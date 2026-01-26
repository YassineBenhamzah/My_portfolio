import React from "react";

export default function About() {
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
        <div className="pt-20 px-4 min-h-screen">
            <div className="min-h-screen  py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional web development services tailored to
                            your needs ★
                        </p>
                        <div className="w-24 h-1 bg-green-500 mx-auto mt-8"></div>
                    </div>

                    {/* Services Grid - 2 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-3xl flex-shrink-0">
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                            {service.title}
                                        </h3>
                                        <div className="w-12 h-1 bg-green-500 mb-4"></div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-16">
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                            Start Your Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
