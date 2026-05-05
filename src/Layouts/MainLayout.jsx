import React from "react";
import Navbar from "../Pages/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function MainLayout() {
  const { isDarkMode } = useStateContext();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? "bg-gray-950" : "bg-gray-100"
    }`}>
      <Navbar />  {/* Navbar always visible */}
      <main>
        <Outlet /> {/* THIS renders the current page */}
      </main>
    </div>
  );
}