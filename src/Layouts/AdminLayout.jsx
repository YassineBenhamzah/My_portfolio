import React, { useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import {
    FaHome,
    FaProjectDiagram,
    FaSignOutAlt,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";

export default function AdminLayout() {
    const { user, token, setUser, setToken } = useStateContext();
    const navigate = useNavigate();
    if (!token) {
        return <Navigate to="/login" />;
    }
    const [isOpen, setIsOpen] = useState(false); // Mobile sidebar state

    const handleLogout = (e) => {
        e.preventDefault();

       
        setUser({});
        setToken(null);
        navigate("/");
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar for desktop */}
            <aside className="hidden md:flex bg-gray-900 text-white flex-col w-64 transition-all duration-300">
                <div className="flex items-center justify-between p-5 border-b border-gray-700">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link
                        href="/admin/dashboard"
                        className="flex items-center p-2 rounded hover:bg-gray-800 transition"
                    >
                        <FaHome className="mr-3 text-lg" /> Dashboard
                    </Link>
                    <Link
                        to="/admin/informations"
                        className="flex items-center p-2 rounded hover:bg-gray-800 transition"
                    >
                        <FaProjectDiagram className="mr-3 text-lg" />{" "}
                        Information
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="flex items-center p-2 rounded hover:bg-gray-800 transition w-full text-left"
                    >
                        <FaSignOutAlt className="mr-3 text-lg" /> Logout
                    </button>
                </nav>
            </aside>

            {/* Mobile Sidebar Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                >
                    <aside
                        className="fixed left-0 top-0 w-64 h-full bg-gray-900 text-white flex flex-col p-5"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                    >
                        <div className="flex items-center justify-between mb-5">
                            <h1 className="text-2xl font-bold">Admin Panel</h1>
                            <button onClick={() => setIsOpen(false)}>
                                <FaTimes className="text-xl" />
                            </button>
                        </div>
                        <nav className="flex-1 space-y-2">
                            <Link
                                href="/admin/dashboard"
                                className="flex items-center p-2 rounded hover:bg-gray-800 transition"
                            >
                                <FaHome className="mr-3 text-lg" /> Dashboard
                            </Link>
                            <Link
                                href="/admin/projects"
                                className="flex items-center p-2 rounded hover:bg-gray-800 transition"
                            >
                                <FaProjectDiagram className="mr-3 text-lg" />{" "}
                                Information
                            </Link>
                            <a
                                href="/login"
                                className="flex items-center p-2 rounded hover:bg-gray-800 transition mt-auto"
                            >
                                <FaSignOutAlt className="mr-3 text-lg" /> Logout
                            </a>
                        </nav>
                    </aside>
                </div>
            )}

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-16 bg-white shadow flex items-center px-4 md:px-6 justify-between">
                    <div className="flex items-center space-x-4">
                        {/* Mobile toggle */}
                        <button
                            className="text-gray-800 md:hidden"
                            onClick={() => setIsOpen(true)}
                        >
                            <FaBars className="text-xl" />
                        </button>
                        <h2 className="text-xl font-semibold">Dashboard</h2>
                    </div>

                    {/* User info */}
                    <div className="flex items-center space-x-4">
                        <span className="font-medium text-gray-700">
                            {user.name}
                        </span>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-4 md:p-6 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
