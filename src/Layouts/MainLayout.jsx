import React from "react";
import Navbar from "../Pages/Navbar";
import { Navigate, Outlet } from "react-router-dom";





export default function MainLayout() {
  
  
  return (
    <div className=" bg-gray-300 ">
      <div>
      <Navbar />  {/* Navbar always visible */}
      <main className="">  {/* add padding if navbar is fixed */}
        <Outlet  /> {/* THIS renders the current page */}
      </main>
    </div>
    </div>
  );
}