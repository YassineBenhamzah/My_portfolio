import React, { useRef, useState } from "react";
import BackMatrix from "./BackMatrix";
import axiosClient from "../axiosClient"; // Make sure this path is correct
import { useStateContext } from "../contexts/ContextProvider";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
    const { isDarkMode } = useStateContext();

    // Create refs for each input
    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    // State for loading, success, and errors
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        setSuccess(false);
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value,
        };
        try {
            const response = await axiosClient.post("/contact", payload);

            if (response.data.success) {
                setSuccess(true);

                // Clear form fields
                nameRef.current.value = "";
                emailRef.current.value = "";
                subjectRef.current.value = "";
                messageRef.current.value = "";

                // Hide success message after 5 seconds
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            }
        } catch (error) {
            if (error.response?.data?.errors) {
                // Laravel validation errors
                setErrors(error.response.data.errors);
                // Focus on first field with error
                if (error.response.data.errors.name) {
                    nameRef.current?.focus();
                } else if (error.response.data.errors.email) {
                    emailRef.current?.focus();
                } else if (error.response.data.errors.subject) {
                    subjectRef.current?.focus();
                } else if (error.response.data.errors.message) {
                    messageRef.current?.focus();
                }
            } else {
                setErrors({
                    general: "Something went wrong. Please try again.",
                });
            }
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: <FaEnvelope className="w-6 h-6" />,
            title: "Email",
            value: "yassine.benhamzah00@gmail.com",
            link: "mailto:yassine.benhamzah00@gmail.com",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: <FaPhone className="w-6 h-6" />,
            title: "Phone",
            value: "+212 645965666",
            link: "tel:+212645965666",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: <FaMapMarkerAlt className="w-6 h-6" />,
            title: "Location",
            value: "Casablanca, Morocco",
            link: "https://maps.google.com",
            color: "from-purple-500 to-pink-500",
        },
    ];

    const socialLinks = [
        {
            icon: <FaGithub className="w-6 h-6" />,
            name: "GitHub",
            link: "https://github.com/YassineBenhamzah",
            color: "hover:text-black",
        },
        {
            icon: <FaLinkedin className="w-6 h-6" />,
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/yassine-benhamzah/",
            color: "hover:text-blue-500",
        },
    ];

    return (
        <div className="relative pt-20 px-4 min-h-screen overflow-hidden">
            {/* Background */}
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
                    isDarkMode ? "bg-green-500/10" : "bg-green-500/5"
                }`}
            ></div>
            <div
                className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
                    isDarkMode ? "bg-cyan-500/10" : "bg-cyan-500/5"
                }`}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto pb-20 mt-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className={`px-4 py-2 border rounded-full text-sm font-semibold backdrop-blur-sm ${
                                isDarkMode
                                    ? "bg-green-500/10 border-green-500/30 text-green-400"
                                    : "bg-green-50 border-green-200 text-green-700"
                            }`}
                        >
                            Get In Touch
                        </span>
                    </div>
                    <h1
                        className={`text-5xl md:text-6xl font-bold mb-4 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                    >
                        <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                            Contact Me
                        </span>
                    </h1>
                    <p
                        className={`text-lg max-w-2xl mx-auto ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                        Have a project in mind? Let's work together to bring
                        your ideas to life!
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Contact Info Cards */}
                    {contactInfo.map((info, index) => (
                        <a
                            key={index}
                            href={info.link}
                            target="_blank"
                            rel="noreferrer"
                            className={`group p-6 rounded-2xl border backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                                isDarkMode
                                    ? "bg-gray-800/50 border-gray-700/50 hover:border-green-500/50"
                                    : "bg-white/70 border-gray-300 hover:border-green-500/50"
                            }`}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`p-4 rounded-xl bg-gradient-to-r ${info.color} text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                                >
                                    {info.icon}
                                </div>
                                <div className="flex-1">
                                    <h3
                                        className={`text-lg font-semibold mb-2 ${
                                            isDarkMode
                                                ? "text-white"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        {info.title}
                                    </h3>
                                    <p
                                        className={`text-sm ${
                                            isDarkMode
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        {info.value}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Contact Form & Social Links */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <form
                            onSubmit={handleSubmit}
                            className={`p-8 rounded-2xl border backdrop-blur-lg ${
                                isDarkMode
                                    ? "bg-gray-800/50 border-gray-700/50"
                                    : "bg-white/70 border-gray-300"
                            }`}
                        >
                            <h2
                                className={`text-2xl font-bold mb-6 ${
                                    isDarkMode ? "text-white" : "text-gray-900"
                                }`}
                            >
                                Send Me a Message
                            </h2>

                            {/* Success Message */}
                            {success && (
                                <div
                                    className={`mb-6 p-4 rounded-lg border ${
                                        isDarkMode
                                            ? "bg-green-500/10 border-green-500/30 text-green-400"
                                            : "bg-green-50 border-green-200 text-green-700"
                                    }`}
                                >
                                    <p className="font-semibold">
                                        ✓ Message sent successfully!
                                    </p>
                                    <p className="text-sm mt-1">
                                        I'll get back to you soon.
                                    </p>
                                </div>
                            )}

                            {/* General Error Message */}
                            {errors.general && (
                                <div
                                    className={`mb-6 p-4 rounded-lg border ${
                                        isDarkMode
                                            ? "bg-red-500/10 border-red-500/30 text-red-400"
                                            : "bg-red-50 border-red-200 text-red-700"
                                    }`}
                                >
                                    <p className="font-semibold">
                                        {errors.general}
                                    </p>
                                </div>
                            )}

                            <div className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label
                                        className={`block mb-2 font-medium text-sm ${
                                            isDarkMode
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        ref={nameRef}
                                        type="text"
                                        name="name"
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                            errors.name ? "border-red-500" : ""
                                        } ${
                                            isDarkMode
                                                ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500"
                                                : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                                        }`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.name[0]}
                                        </p>
                                    )}
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label
                                        className={`block mb-2 font-medium text-sm ${
                                            isDarkMode
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        ref={emailRef}
                                        type="email"
                                        name="email"
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                            errors.email ? "border-red-500" : ""
                                        } ${
                                            isDarkMode
                                                ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500"
                                                : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                                        }`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.email[0]}
                                        </p>
                                    )}
                                </div>

                                {/* Subject Input */}
                                <div>
                                    <label
                                        className={`block mb-2 font-medium text-sm ${
                                            isDarkMode
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        Subject
                                    </label>
                                    <input
                                        ref={subjectRef}
                                        type="text"
                                        name="subject"
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                            errors.subject
                                                ? "border-red-500"
                                                : ""
                                        } ${
                                            isDarkMode
                                                ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500"
                                                : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                                        }`}
                                        placeholder="Project Inquiry"
                                    />
                                    {errors.subject && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.subject[0]}
                                        </p>
                                    )}
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <label
                                        className={`block mb-2 font-medium text-sm ${
                                            isDarkMode
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        ref={messageRef}
                                        name="message"
                                        required
                                        rows="5"
                                        className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-green-500 resize-none ${
                                            errors.message
                                                ? "border-red-500"
                                                : ""
                                        } ${
                                            isDarkMode
                                                ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500"
                                                : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                                        }`}
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.message[0]}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                                        loading
                                            ? "bg-gray-500 text-white cursor-not-allowed"
                                            : isDarkMode
                                            ? "bg-green-500 text-gray-900 hover:bg-green-400 shadow-lg hover:shadow-green-500/50"
                                            : "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-600/50"
                                    }`}
                                >
                                    {loading ? (
                                        <>
                                            <svg
                                                className="animate-spin h-5 w-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    fill="none"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Social Links & Additional Info */}
                    <div className="space-y-6">
                        {/* Follow Me Card */}
                        <div
                            className={`p-6 rounded-2xl border backdrop-blur-lg ${
                                isDarkMode
                                    ? "bg-gray-800/50 border-gray-700/50"
                                    : "bg-white/70 border-gray-300"
                            }`}
                        >
                            <h3
                                className={`text-xl font-bold mb-4 ${
                                    isDarkMode ? "text-white" : "text-gray-900"
                                }`}
                            >
                                Follow Me
                            </h3>
                            <div className="space-y-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                                            isDarkMode
                                                ? "hover:bg-gray-700/50 text-gray-300"
                                                : "hover:bg-gray-100 text-gray-700"
                                        } ${social.color}`}
                                    >
                                        {social.icon}
                                        <span className="font-medium">
                                            {social.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div
                            className={`p-6 rounded-2xl border backdrop-blur-lg ${
                                isDarkMode
                                    ? "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30"
                                    : "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
                            }`}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <h3
                                    className={`text-lg font-bold ${
                                        isDarkMode
                                            ? "text-white"
                                            : "text-gray-900"
                                    }`}
                                >
                                    Available for Work
                                </h3>
                            </div>
                            <p
                                className={`text-sm ${
                                    isDarkMode
                                        ? "text-gray-300"
                                        : "text-gray-700"
                                }`}
                            >
                                I'm currently available for freelance projects
                                and full-time opportunities. Let's create
                                something amazing together!
                            </p>
                        </div>

                        {/* Response Time Card */}
                        <div
                            className={`p-6 rounded-2xl border backdrop-blur-lg ${
                                isDarkMode
                                    ? "bg-gray-800/50 border-gray-700/50"
                                    : "bg-white/70 border-gray-300"
                            }`}
                        >
                            <h3
                                className={`text-lg font-bold mb-3 ${
                                    isDarkMode ? "text-white" : "text-gray-900"
                                }`}
                            >
                                Response Time
                            </h3>
                            <p
                                className={`text-sm ${
                                    isDarkMode
                                        ? "text-gray-300"
                                        : "text-gray-700"
                                }`}
                            >
                                I typically respond within{" "}
                                <span className="font-semibold text-green-500">
                                    24 hours
                                </span>{" "}
                                on business days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
